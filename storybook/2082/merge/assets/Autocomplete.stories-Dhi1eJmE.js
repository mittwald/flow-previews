import{j as t}from"./iframe-EtTbRQoM.js";import{u as a,F as c,t as h,a as f}from"./Form-B86kUuvW.js";import{B as m}from"./Button-DxuCaQyR.js";import{S as j}from"./Section-BmVYkrqh.js";import{A as F}from"./ActionGroup-Cl4D3H2T.js";import{s as u}from"./Action-CL-CoYGw.js";import{A as p}from"./Autocomplete-CuIn9JN9.js";import{L as l}from"./Label-BHPxSoWd.js";import{T as g}from"./TextField-BA9od5Rk.js";import{O as n}from"./Option-BJgdrxpo.js";import{S}from"./SearchField-CRUBxBKU.js";import"./index-nuYtCEEu.js";import"./dynamic-Cv7GHFn6.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./FieldError-Bx65Dx0T.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./utils-C_hvyJpn.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./browser-Cob99Do9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-CAO-zPwU.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./ContextMenuSection-CGnTeLpY.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./getActionGroupSlot-CxKatSQe.js";import"./useStatic-DxnBGf3l.js";import"./context-C1SllNhn.js";import"./useOverlayController-BhlWBiph.js";import"./ReactAriaControlledValueFix-CYrgQbLH.js";import"./useFilter-BJjLne1z.js";import"./TextFieldBase-CvME3450.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-RyyHlj0A.js";import"./TextField-D5UL4yco.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./Input-TlPGvJ5n.js";import"./useTextField-Ec9tFhY1.js";import"./useFormReset-B1BZ1rNK.js";import"./useFormValidation-CisZkPpg.js";import"./Popover-ByVAPhqX.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./DragAndDrop-bnGQrADG.js";import"./inertValue-BlKXzbhP.js";import"./useListState-Bda54Xva.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,O=b("submit"),y=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Nt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async x=>{await u(1500),O(x)},e=a({defaultValues:{email:""}}),o=h(),d=e.watch("email");return t.jsx(c,{form:e,onSubmit:r,children:t.jsxs(j,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(g,{children:t.jsx(l,{children:"Test"})}),y(d)]})}),t.jsxs(F,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=a();return t.jsxs(c,{form:r,onSubmit:async()=>await u(2e3),children:[t.jsx(f,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(S,{children:t.jsx(l,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ut=["Default","WithFocusAndError"];export{i as Default,s as WithFocusAndError,Ut as __namedExportsOrder,Nt as default};
