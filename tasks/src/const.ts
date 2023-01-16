import type { ModelLibraryKey } from "../../js/src/lib/interfaces/Libraries";
import type { PipelineType } from "../../js/src/lib/interfaces/Types";

/*
 * Model libraries compatible with each ML task
 */
export const TASKS_MODEL_LIBRARIES: Record<PipelineType, ModelLibraryKey[]> = {
	"audio-classification":           ["speechbrain", "transformers"],
	"audio-to-audio":                 ["asteroid", "speechbrain"],
	"automatic-speech-recognition":   ["espnet", "nemo", "speechbrain", "transformers"],
	"conversational":                 ["transformers"],
	"depth-estimation":               ["transformers"],
	"document-question-answering":    ["transformers"],
	"feature-extraction":             ["sentence-transformers", "transformers"],
	"fill-mask":                      ["transformers"],
	"graph-ml": 					  ["transformers"]
	"image-classification":           ["keras", "timm", "transformers"],
	"image-segmentation":             ["transformers"],
	"image-to-image":                 [],
	"image-to-text":                  [],
	"video-classification":           [],
	"multiple-choice":                ["transformers"],
	"object-detection":               ["transformers"],
	"other":                          [],
	"question-answering":             ["adapter-transformers", "allennlp", "transformers"],
	"robotics":                       [],
	"reinforcement-learning":         ["transformers", "stable-baselines3", "ml-agents", "sample-factory"],
	"sentence-similarity":            ["sentence-transformers", "spacy"],
	"summarization":                  ["transformers"],
	"table-question-answering":       ["transformers"],
	"table-to-text":                  ["transformers"],
	"tabular-classification":         ["sklearn"],
	"tabular-regression":             ["sklearn"],
	"tabular-to-text":                ["transformers"],
	"text-classification":            ["adapter-transformers", "spacy", "transformers"],
	"text-generation":                ["transformers"],
	"text-retrieval":                 [],
	"text-to-image":                  [],
	"text-to-speech":                 ["espnet", "tensorflowtts"],
	"text2text-generation":           ["transformers"],
	"time-series-forecasting":        [],
	"token-classification":           ["adapter-transformers", "flair", "spacy", "stanza", "transformers"],
	"translation":                    ["transformers"],
	"unconditional-image-generation": [],
	"visual-question-answering":      [],
	"voice-activity-detection":       [],
	"zero-shot-classification":       ["transformers"],
	"zero-shot-image-classification": [],
};
