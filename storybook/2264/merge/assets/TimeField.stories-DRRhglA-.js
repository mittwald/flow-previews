import{j as r,r as x}from"./iframe-HHIIuBER.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-2sRpn4iN.js";import{L as t}from"./Label-CBXKH6Tn.js";import{B as l}from"./Button-D9uXd6kS.js";import{S as b}from"./Section-DSfs8S5C.js";import{A as E}from"./ActionGroup-CAmp-FAx.js";import{s as c}from"./Action-_oJPJyM7.js";import{L as S}from"./DateInput-BT6cJR7S.js";import{T as o}from"./TimeField-gNgr50Db.js";import{F as T}from"./FieldError-Fy3l3DO0.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-UvYry7O0.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./clsx-B-dksMZM.js";import"./index-CXDCOpiF.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./context-BwOS-W-N.js";import"./useRef-UyhpXirX.js";import"./utils-Cg0Q0SJj.js";import"./ButtonView-QAfAhpRw.js";import"./browser-BiwdkBmz.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./IconWarning-CPuUEZGY.js";import"./remote-MyOm1NIW.js";import"./Text-1gTdtZLR.js";import"./EmulatedBoldText-DygQZkyN.js";import"./Text-XNblTka2.js";import"./LoadingSpinner-DsMp8zOw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B3mdCDJz.js";import"./ProgressBar-2UTBzJPE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-5SH0-wGx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DR7SsbUT.js";import"./useFocus--KWf2FGc.js";import"./useFocusRing-4HIuR3kq.js";import"./useFocusable-CK9MQKQ0.js";import"./ContextMenuSection-CTAuboSL.js";import"./Dialog-17xgL67A.js";import"./RSPContexts-DTcyqJ2O.js";import"./OverlayArrow-BDTM6fDd.js";import"./useControlledState-DbjjrDzt.js";import"./Collection-CvBP3D3N.js";import"./CollectionBuilder-O9kuHpIB.js";import"./SelectionIndicator-D4-zI_jf.js";import"./Separator-C2NuKe-C.js";import"./SelectionManager-sYUHP04o.js";import"./useEvent-Btkolbn2.js";import"./useCollator-h0FVZg7K.js";import"./FocusScope-BRQqWTqz.js";import"./VisuallyHidden-W06uk0vU.js";import"./getActionGroupSlot-DxN6Z1_y.js";import"./useStatic-CHenPBZg.js";import"./context-D550pjOP.js";import"./FieldError-DxbTuNm9.js";import"./Form-bxdneiGL.js";import"./Group-CQTHjQwH.js";import"./Input-BPv4G1er.js";import"./useFormValidation-CzNeWdfJ.js";import"./useFormReset-9uO05BU2.js";import"./useSpinButton-B8cKwDgw.js";import"./useFilter-CXjpP1hG.js";import"./useFieldComponent-DUw61_cc.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
