import{j as t}from"./iframe-CP5fTbjA.js";import{u as h,F as f,t as b,a as O}from"./Form-DYPer1qA.js";import{B as m}from"./Button-LzGPdYwx.js";import{S as y}from"./Section-DiXKzprR.js";import{A}from"./ActionGroup-Cxrl3sEx.js";import{s as j}from"./Action-BkjzGa_I.js";import{A as p}from"./Autocomplete-7-s3GSvu.js";import{L as F}from"./Label-BqN0rMYY.js";import{T as B}from"./TextField-C4OmvLfA.js";import{O as n}from"./Option-BC-gHOwh.js";import{S as v}from"./SearchField-Djfio3ct.js";import"./index-Cun1SEai.js";import"./dynamic-e5X8hiwW.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./clsx-B-dksMZM.js";import"./index-DskZqzrG.js";import"./FieldError-De2xyHB9.js";import"./IconWarning-YasB_Ei3.js";import"./FieldError-CsW0lZ5n.js";import"./utils-D6GTtcOE.js";import"./Text-BAGiBnj-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./context-pkC0B_Pd.js";import"./browser-BxAQ3I6S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-CHvdz95V.js";import"./EmulatedBoldText-CnmkyqOO.js";import"./LoadingSpinner-B6JgwtAG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DcNEz-W6.js";import"./ProgressBar-DPdjuR9Z.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOoZUp13.js";import"./useFocus-wlnmJgKA.js";import"./useFocusRing-Cgj30sRP.js";import"./useFocusable-BoWde-QA.js";import"./ContextMenuSection-V-zZv8b3.js";import"./Dialog-DAzhbt-W.js";import"./RSPContexts-BW6Q5n3-.js";import"./OverlayArrow-CtZDvQgB.js";import"./useControlledState-5yv2Ipvc.js";import"./Collection-BOIgwszt.js";import"./CollectionBuilder-HzejECpA.js";import"./context-BoN7p6BF.js";import"./Separator-CXM6la1d.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./useCollator-NOEQaEQX.js";import"./FocusScope-OWR7C_89.js";import"./VisuallyHidden-umqttFyt.js";import"./getActionGroupSlot-DggKykPy.js";import"./useStatic-CBwN_HzY.js";import"./context-DXGAVSML.js";import"./useOverlayController-DuEm9ptT.js";import"./ReactAriaControlledValueFix-CVNkgbtZ.js";import"./useFilter-Dw0Rwh1k.js";import"./TextFieldBase-B_onkFZ8.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CEO5JJNc.js";import"./TextField-3H0FQYY0.js";import"./Form-DU1fRx45.js";import"./Group-kabkfPCX.js";import"./Input-DKZrAi90.js";import"./useTextField-Brwt3o7O.js";import"./useFormReset-B6af-x2Y.js";import"./useFormValidation-Lrzd87zJ.js";import"./Popover-JrRBQobZ.js";import"./OverlayContextProvider-DdAgShMM.js";import"./ClearPropsContextView-DhKx-WaR.js";import"./DragAndDrop-lPlD-Y_I.js";import"./inertValue-CprOBwEJ.js";import"./useListState-DkvXWcYC.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
