import{j as r}from"./iframe-CP5fTbjA.js";import{a as c,u as l,F as d,t as b}from"./Form-DYPer1qA.js";import{L as h}from"./Label-BqN0rMYY.js";import{B as t}from"./Button-LzGPdYwx.js";import{S as y}from"./Section-DiXKzprR.js";import{A as B}from"./ActionGroup-Cxrl3sEx.js";import{s as x}from"./Action-BkjzGa_I.js";import{F as f}from"./FileField-COozahyC.js";import"./index-Cun1SEai.js";import"./dynamic-e5X8hiwW.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./clsx-B-dksMZM.js";import"./index-DskZqzrG.js";import"./FieldError-De2xyHB9.js";import"./IconWarning-YasB_Ei3.js";import"./FieldError-CsW0lZ5n.js";import"./utils-D6GTtcOE.js";import"./Text-BAGiBnj-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./context-pkC0B_Pd.js";import"./browser-BxAQ3I6S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./Text-CHvdz95V.js";import"./EmulatedBoldText-CnmkyqOO.js";import"./LoadingSpinner-B6JgwtAG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcNEz-W6.js";import"./ProgressBar-DPdjuR9Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOoZUp13.js";import"./useFocus-wlnmJgKA.js";import"./useFocusRing-Cgj30sRP.js";import"./useFocusable-BoWde-QA.js";import"./ContextMenuSection-V-zZv8b3.js";import"./Dialog-DAzhbt-W.js";import"./RSPContexts-BW6Q5n3-.js";import"./OverlayArrow-CtZDvQgB.js";import"./useControlledState-5yv2Ipvc.js";import"./Collection-BOIgwszt.js";import"./CollectionBuilder-HzejECpA.js";import"./context-BoN7p6BF.js";import"./Separator-CXM6la1d.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./useCollator-NOEQaEQX.js";import"./FocusScope-OWR7C_89.js";import"./VisuallyHidden-umqttFyt.js";import"./getActionGroupSlot-DggKykPy.js";import"./useStatic-CBwN_HzY.js";import"./context-DXGAVSML.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-Lrzd87zJ.js";import"./Input-DKZrAi90.js";import"./useMakeFocusable-D5Xsb7wJ.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const qr=["Default","WithFocusAndError"];export{e as Default,i as WithFocusAndError,qr as __namedExportsOrder,Lr as default};
