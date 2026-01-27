import{j as r,r as x}from"./iframe-DRxscI9O.js";import{a as n,u as a,F as p,t as E,R as u,S as c}from"./ResetButton--HKd1vJe.js";import{L as s}from"./Label-QYcCSLyK.js";import{B as l}from"./Button-Cn0kN-cE.js";import{S as j}from"./Section-D_wy0yj2.js";import{A as b}from"./ActionGroup-DaLtREB8.js";import{s as d}from"./Action-BUOqPppc.js";import{M as m}from"./MarkdownEditor-CbpDhwHZ.js";import{F as g}from"./FieldError-DD28rleL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CC7KPApC.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./clsx-B-dksMZM.js";import"./index-1XGI-8ge.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./context-B7-PA0L6.js";import"./useRef-D3vWQ6fL.js";import"./utils-CR6NBPUA.js";import"./ButtonView-3kbETHdX.js";import"./browser-D6b-4R0j.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./IconWarning-B0GCVytt.js";import"./remote-5HtQVd9k.js";import"./Text-8YV9_ufN.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./Text-C61ezR9Z.js";import"./LoadingSpinner--1cga6s1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cf4nBLFb.js";import"./ProgressBar-KolsJC9x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D6Iwc6BC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-87CEVAU1.js";import"./useFocus-CSD6pEXF.js";import"./useFocusRing-Dd30mTT2.js";import"./useFocusable-_DeXT1Pt.js";import"./ContextMenuSection-4Pmx83k8.js";import"./Dialog-Ds8Y2vRW.js";import"./RSPContexts-O0Lvzjxz.js";import"./OverlayArrow-CnZ26m-G.js";import"./useControlledState-CvH2MSRC.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./VisuallyHidden-hMszIaj5.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./useStatic-DhnGFhXh.js";import"./context-CkpccYw3.js";import"./Markdown-BoAd-hnO.js";import"./CodeBlock-CXtk_hdq.js";import"./CopyButton-HcuUHXmq.js";import"./Tooltip-DHwwi-Zz.js";import"./react-children-utilities-BVkMaYnK.js";import"./Heading-xcTY6oLo.js";import"./Heading-IJ9Uopg1.js";import"./InlineCode-CAgdU8Uh.js";import"./Link-DY2ykMR-.js";import"./Separator-RI6b7A4z.js";import"./TextArea-87oqRV7c.js";import"./TextFieldBase-CPJjkiE1.js";import"./FieldDescription-WQfxWtB-.js";import"./useFieldComponent-B2FoAAf9.js";import"./TextField-Cf9gVelS.js";import"./FieldError-qzmmAdqz.js";import"./Form-Ct55O5fT.js";import"./Group-CHdsrmB5.js";import"./Input-CIOy3WO5.js";import"./useTextField-B623kUWD.js";import"./useFormReset-Ewuleuhs.js";import"./useFormValidation-BZc6xO6n.js";import"./useControlledHostValueProps-D7RpmGIg.js";import"./AlertText-BjP2ge3Y.js";import"./AlertIcon-CLPvczjb.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Zr={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(p,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(p,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const $r=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,$r as __namedExportsOrder,Zr as default};
