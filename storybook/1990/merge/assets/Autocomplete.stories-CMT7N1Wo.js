import{j as t}from"./iframe-Dmf5T25c.js";import{u as h,F as f,t as b,a as O}from"./Form-m_PW291X.js";import{B as m}from"./Button-DJAJQ6nX.js";import{S as y}from"./Section-CuethHEJ.js";import{A}from"./ActionGroup-L54X6gLb.js";import{s as j}from"./Action-7bo_XniG.js";import{A as p}from"./Autocomplete-DhonMeoo.js";import{L as F}from"./Label-CBoBMaMu.js";import{T as B}from"./TextField-C5urh4tN.js";import{O as n}from"./Option--U3wq6te.js";import{S as v}from"./SearchField-BoK-wH2f.js";import"./index-Cun1SEai.js";import"./dynamic-Do2mwXEo.js";import"./flowComponent-CPeLqOpb.js";import"./index-DqWAPupW.js";import"./clsx-B-dksMZM.js";import"./index-C0-6kTd0.js";import"./FieldError-BrbRFqe2.js";import"./IconWarning-1UlzAmnA.js";import"./FieldError-osDHr7AF.js";import"./utils-DsML-bt_.js";import"./Text-DgEV6luH.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BKpY3AP6.js";import"./context-CfglF3Ge.js";import"./browser-DrFxiFmb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-DLrkajvz.js";import"./EmulatedBoldText-B4ifPFjU.js";import"./LoadingSpinner-CneC6UV3.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button--dPgG3q3.js";import"./ProgressBar-DfDGPnCO.js";import"./Label-D3KFpetT.js";import"./Hidden-ixkSnYSe.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BaxinNTr.js";import"./useFocus-DeIDhTP5.js";import"./useFocusRing-DUSzUYSL.js";import"./useFocusable-Cm1AomQc.js";import"./ContextMenuSection-DC2rWjKA.js";import"./Dialog-BPlr3UWC.js";import"./RSPContexts-Bbwd3bcw.js";import"./OverlayArrow-FAQ6eOiA.js";import"./useControlledState-ncLEgmHX.js";import"./Collection-D0Z3i_1t.js";import"./CollectionBuilder-gvxExH9K.js";import"./context-BUTi_CwL.js";import"./Separator-BJYdsHoh.js";import"./SelectionManager-2dfHW5bj.js";import"./useEvent-DYLx6Izz.js";import"./useCollator-BMcltKGA.js";import"./FocusScope-XGh4Ynry.js";import"./VisuallyHidden-CtSvbpyT.js";import"./getActionGroupSlot-CsRvNk5a.js";import"./useStatic-B7bUROdd.js";import"./context-DfHcYJaf.js";import"./useOverlayController-BP8yeNHr.js";import"./ReactAriaControlledValueFix-B1bEAAAe.js";import"./useFilter-DrpowCyT.js";import"./TextFieldBase-B3nf3yOl.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BsTUsqd7.js";import"./TextField-B4mrJcnB.js";import"./Form-CioSAe3u.js";import"./Group-C7lBiOpp.js";import"./Input-CEe4Geo-.js";import"./useTextField-CxMmeXoO.js";import"./useFormReset-BQs2ByJh.js";import"./useFormValidation-BlVKI6aj.js";import"./Popover-BaPL_3pu.js";import"./OverlayContextProvider-ryh_mCsN.js";import"./ClearPropsContextView-5sw7kvOL.js";import"./DragAndDrop-vmW4cNxD.js";import"./inertValue-0jtU-hjR.js";import"./useListState-C1vJk0xn.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
