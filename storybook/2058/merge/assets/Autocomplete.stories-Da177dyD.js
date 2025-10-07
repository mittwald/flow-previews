import{j as t}from"./iframe-D2Anwmct.js";import{u as h,F as f,t as b,a as O}from"./Form-NvgoK1At.js";import{B as m}from"./Button-DzBCXdJ8.js";import{S as y}from"./Section-D-XgJ8U5.js";import{A}from"./ActionGroup-DwbiqJMg.js";import{s as j}from"./Action-TQJO2mvI.js";import{A as p}from"./Autocomplete-BgCVic7v.js";import{L as F}from"./Label-CqHNa78s.js";import{T as B}from"./TextField-Cchl1pb_.js";import{O as n}from"./Option-BKrk2oAQ.js";import{S as v}from"./SearchField-RI5a6sM1.js";import"./index-Cun1SEai.js";import"./dynamic-Cfahilqg.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./clsx-B-dksMZM.js";import"./index-Ch7RQrKi.js";import"./FieldError-BoPnTUuW.js";import"./IconWarning-DnpABaws.js";import"./FieldError-BxxGUPOn.js";import"./utils-BpjcCBEz.js";import"./Text-lRP8kqf1.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./context--yho_VB2.js";import"./browser-CPuaporN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-DtdPLjLU.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DkH4CmpU.js";import"./useFocus-CPbnM8zc.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";import"./ContextMenuSection-DEYSZK6N.js";import"./Dialog-CzAn2oqc.js";import"./RSPContexts-W5re5w0Z.js";import"./OverlayArrow-nozbf4eZ.js";import"./useControlledState-CmSk5MJT.js";import"./Collection-C6c4IzCm.js";import"./CollectionBuilder-BN9-opMn.js";import"./context-X2EiAF6-.js";import"./Separator-XkOJaGaU.js";import"./SelectionManager-BVJUtLYE.js";import"./useEvent-eZ8bSyVx.js";import"./useCollator-DzTf225U.js";import"./FocusScope-B3f0Mp00.js";import"./VisuallyHidden-Cz7LPiXA.js";import"./getActionGroupSlot-CMiTVAum.js";import"./useStatic-CHoU06Vl.js";import"./context-BRmDUAMd.js";import"./useOverlayController-Ul_RLZ0a.js";import"./ReactAriaControlledValueFix-BbJVUddt.js";import"./useFilter-5EzRRspA.js";import"./TextFieldBase-DHe8x4J1.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-Dxspg-xZ.js";import"./TextField-cut1w53I.js";import"./Form-C_7tgvec.js";import"./Group-CY7TZenZ.js";import"./Input-B4tXXK1a.js";import"./useTextField-xwyx7IZc.js";import"./useFormReset-Bn-oECSu.js";import"./useFormValidation-s-r8BMkB.js";import"./Popover-UOV2agJ5.js";import"./OverlayContextProvider-C-LoU2NQ.js";import"./ClearPropsContextView-DS9FXrAR.js";import"./DragAndDrop-Dl5NyDui.js";import"./inertValue-DsmkwZ-n.js";import"./useListState-BxiKr2W9.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Autocomplete>
            <SearchField>
              <Label>Test</Label>
            </SearchField>
            <Option value="example.com">example.com</Option>
            <Option value="domain.de">domain.de</Option>
            <Option value="test.org">test.org</Option>
          </Autocomplete>
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
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Zt=["Default","WithFocusAndError"];export{i as Default,s as WithFocusAndError,Zt as __namedExportsOrder,Xt as default};
