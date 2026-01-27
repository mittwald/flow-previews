import{j as r,r as F}from"./iframe-kP2HEfFS.js";import{a as p,u as c,F as d,t as x}from"./ResetButton-CSTft9O0.js";import{L as o}from"./Label-o-9raADe.js";import{B as s}from"./Button-D2SKyW-T.js";import{S as u}from"./Section-6hxUOdoj.js";import{A as g}from"./ActionGroup-CwS6zLOi.js";import{s as l}from"./Action-DkWPc0_f.js";import{F as j}from"./FieldError-CJUuAB6W.js";import{R as e}from"./Rating-RVe_9Nh6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bb3YYypk.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./useRef-Ddb8Xdr-.js";import"./utils-C12UPk0k.js";import"./ButtonView-B-wfMpgB.js";import"./browser-CLBqp6VR.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./Text-DmTsXHLN.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./Text-Bt0sFzeR.js";import"./LoadingSpinner-DqLZcArG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BPAnAcar.js";import"./ProgressBar-BJr25bRm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./ContextMenuSection-Dtdvg2h1.js";import"./Dialog-DLhIMuXA.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./useControlledState-K2EmMrc1.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./VisuallyHidden-BxKC931y.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./useStatic-D099is7R.js";import"./context-Dy6MMTPO.js";import"./FieldError-BL6ZnBFp.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";import"./RadioGroup-NxAvrsy3.js";import"./Form-D51h5Mwy.js";import"./useFormValidation-CKIaBDhF.js";import"./useFormReset-BTQYEics.js";import"./useFieldComponent-D28HcwQQ.js";import"./useMakeFocusable-DTcEo_iv.js";const{action:R}=__STORYBOOK_MODULE_ACTIONS__,b=R("submit"),Ar={title:"Integrations/React Hook Form/Rating",component:p,render:()=>{const t=async h=>{await l(1500),b(h)},f=c({defaultValues:{ratingDefaultValue:3}}),a=x();return r.jsx(d,{form:f,onSubmit:t,children:r.jsxs(u,{children:[r.jsx(a,{name:"rating",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingDefaultValue",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(a,{name:"ratingRequired",rules:{required:"Please rate"},children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},i={},n={render:()=>{const t=c();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(d,{form:t,onSubmit:async()=>await l(2e3),children:r.jsxs(u,{children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsxs(e,{isInvalid:!0,children:[r.jsx(o,{children:"Rating"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:()=>{const t=c();return r.jsxs(d,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(e,{children:r.jsx(o,{children:"Rating"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
            <Rating>
              <Label>Rating</Label>
            </Rating>
          </Field>
          <Rating isInvalid>
            <Label>Rating</Label>
            <FieldError>ErrorFromOuterFieldError!</FieldError>
          </Rating>
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{i as Default,n as WithFieldError,m as WithFocus,Ir as __namedExportsOrder,Ar as default};
