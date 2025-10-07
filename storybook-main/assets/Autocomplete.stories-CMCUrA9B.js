import{j as t}from"./iframe-7dgBHkjI.js";import{u as h,F as f,t as b,a as O}from"./Form-ChLUzjHn.js";import{B as m}from"./Button-C4xC-ENb.js";import{S as y}from"./Section-BTwbdvzE.js";import{A}from"./ActionGroup-DgEWvKip.js";import{s as j}from"./Action-aBxNfjGZ.js";import{A as p}from"./Autocomplete-BIRKCWO5.js";import{L as F}from"./Label-BOtdfEdH.js";import{T as B}from"./TextField-BFcHFyNI.js";import{O as n}from"./Option-CZ5Q67JQ.js";import{S as v}from"./SearchField-BJqL_EqZ.js";import"./index-Cun1SEai.js";import"./dynamic-3ixFNiB4.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./clsx-B-dksMZM.js";import"./index-DzRRQR_A.js";import"./FieldError-XEHbUqlq.js";import"./IconWarning-CHzLfKjq.js";import"./FieldError-DQvJzSCl.js";import"./utils-skLZq2rT.js";import"./Text-CcEbIf7j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./context-DLyAckLP.js";import"./browser-BYuTkZ2t.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-CPbpE1eA.js";import"./EmulatedBoldText-wnDp19Ns.js";import"./LoadingSpinner-BhdyCwx7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DA_owd3b.js";import"./ProgressBar-m_J970Ss.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C40tO5Ld.js";import"./useFocus-BVcT7Cmq.js";import"./useFocusRing-DpIlZv5r.js";import"./useFocusable-CjOl0zdL.js";import"./ContextMenuSection-P3ZBunxW.js";import"./Dialog-RmwKLDR6.js";import"./RSPContexts-DU60rLWV.js";import"./OverlayArrow-CimrvBmG.js";import"./useControlledState-U7vX1g_u.js";import"./Collection-BoyNLLEq.js";import"./CollectionBuilder-BVEyhuGf.js";import"./context-CWPPwc3G.js";import"./Separator-zM5l-9RV.js";import"./SelectionManager-CRbs3IKU.js";import"./useEvent-CJDlXvBr.js";import"./useCollator-aaYKjyL1.js";import"./FocusScope-iWt5Cohm.js";import"./VisuallyHidden-DxfkSq7z.js";import"./getActionGroupSlot-p5Itb_hd.js";import"./useStatic-BofYKATW.js";import"./context-CM0pxKNs.js";import"./useOverlayController-Zz6_dm2l.js";import"./ReactAriaControlledValueFix-IHuL5Gc3.js";import"./useFilter-CKkOF_ze.js";import"./TextFieldBase-CDrFv569.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-HgH3Q7pf.js";import"./TextField-DOVBWSoz.js";import"./Form-emkFOLws.js";import"./Group-Bn60iEKX.js";import"./Input-pFk5V5wL.js";import"./useTextField-B_VR62Ms.js";import"./useFormReset-DcXBOsyZ.js";import"./useFormValidation-lhUbjjow.js";import"./Popover-CM6k8qzJ.js";import"./OverlayContextProvider-hM9hqaVX.js";import"./ClearPropsContextView-Dl-zrP-C.js";import"./DragAndDrop--DuP6TpQ.js";import"./inertValue-Ch8dkK4I.js";import"./useListState-D-VpQZE8.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
