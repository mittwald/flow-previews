import{j as r,r as x}from"./iframe-BUX4ZqHF.js";import{b as a,u as p,F as d,t as j}from"./Form-uWo6WJWO.js";import{L as t}from"./Label-kgnV-RXM.js";import{R as u,S as F}from"./ResetButton-DCTmDlFv.js";import{B as l}from"./Button-BQks1Fwk.js";import{S as b}from"./Section-DIg16xJ5.js";import{A as E}from"./ActionGroup-BG42jB9j.js";import{s as c}from"./Action-BoSxlb-x.js";import{L as S}from"./DateInput-DZSmj2au.js";import{T as o}from"./TimeField-CJR_GHAk.js";import{F as T}from"./FieldError-BcNphJCj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C-JL21_Y.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./clsx-B-dksMZM.js";import"./index-BP0Kc6JB.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./context-DdyqVFXP.js";import"./browser-D0x3Xdqp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-I8DqILoy.js";import"./utils-D9iTInv6.js";import"./Hidden-CmsGFsNY.js";import"./useRef-HkbLjGA6.js";import"./IconWarning-CQ3vdTUk.js";import"./remote-CM65cF_Q.js";import"./Text-CCD2jWDE.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./Text-BG7MORzn.js";import"./LoadingSpinner-DAzOOzOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7cH5OT2.js";import"./ProgressBar-D_H4fWP7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVc7LJa4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqXzXpsh.js";import"./useFocus-CJRF0W0a.js";import"./useFocusRing-LYLGckDp.js";import"./useFocusable-CNxG1VTZ.js";import"./ContextMenuSection-B-plY6qU.js";import"./Dialog-Ds9eM6L5.js";import"./RSPContexts-CCyvn2fa.js";import"./OverlayArrow-BDz2U1dX.js";import"./useControlledState-CgyNYXn6.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./VisuallyHidden-CEZo4IbP.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./useStatic-HiZWtrs6.js";import"./context-DLe4PJj-.js";import"./FieldError-DwISghd1.js";import"./Form-Dyklbi3v.js";import"./Group-DB1vfutX.js";import"./Input-Dt9-alkO.js";import"./useFormValidation-CdmTUY1H.js";import"./useFormReset-DwYjTvSA.js";import"./useSpinButton-CwLb1spK.js";import"./useFilter-j-_M7XoK.js";import"./useFieldComponent-L2xw4dQD.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Gr as __namedExportsOrder,Cr as default};
