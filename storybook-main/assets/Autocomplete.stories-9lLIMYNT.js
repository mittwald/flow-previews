import{j as t}from"./iframe-D_6zdLny.js";import{u as a,F as c,t as h,a as f}from"./Form-CRAgCDt6.js";import{B as m}from"./Button-Hd0_GbPh.js";import{S as j}from"./Section-BOMWvKE6.js";import{A as F}from"./ActionGroup-DJbcBDj6.js";import{s as u}from"./Action-CDIAK01E.js";import{A as p}from"./Autocomplete-BRLDXHED.js";import{L as l}from"./Label-DYStaM4r.js";import{T as g}from"./TextField-DxtduiOH.js";import{O as n}from"./Option-D3PVgJBH.js";import{S}from"./SearchField-BYlRiLcn.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./useOverlayController-ClIsDnWC.js";import"./ReactAriaControlledValueFix-CrUxtzb_.js";import"./useFilter-BIKF0mDd.js";import"./TextFieldBase-D8-P3sbI.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BmjEGOaL.js";import"./TextField-DJdiP2AD.js";import"./Form-BEwxiqG9.js";import"./Group-DD12aKc0.js";import"./Input-DeyWgLjK.js";import"./useTextField-CgNiWdPW.js";import"./useFormReset-jO9kfZl0.js";import"./useFormValidation-B8Bdwi3p.js";import"./Popover-B3PEdI3k.js";import"./OverlayContextProvider-D1-D5Oi5.js";import"./ClearPropsContextView-BWtGAMVv.js";import"./DragAndDrop-BF2Ex1fd.js";import"./inertValue-M9rSLYsC.js";import"./useListState-c7VVoCbf.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,O=b("submit"),y=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Ut={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async x=>{await u(1500),O(x)},e=a({defaultValues:{email:""}}),o=h(),d=e.watch("email");return t.jsx(c,{form:e,onSubmit:r,children:t.jsxs(j,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(g,{children:t.jsx(l,{children:"Test"})}),y(d)]})}),t.jsxs(F,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=a();return t.jsxs(c,{form:r,onSubmit:async()=>await u(2e3),children:[t.jsx(f,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(S,{children:t.jsx(l,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Yt=["Default","WithFocusAndError"];export{i as Default,s as WithFocusAndError,Yt as __namedExportsOrder,Ut as default};
