import{j as r,r as g}from"./iframe-B_TkxfTi.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-Bdlat21c.js";import{B as f}from"./Button-RJdr80c6.js";import{S as E}from"./Section-DuAyIwjj.js";import{A as T}from"./ActionGroup-DrzSRVMS.js";import{s as u}from"./Action-BwMJcjOW.js";import{A as i}from"./Autocomplete-CY1lDlJO.js";import{L as p}from"./Label-B2z_KUki.js";import{T as l}from"./TextField-BXNSD6bG.js";import{O as B}from"./Option-5rm-j8Wu.js";import{F as A}from"./FieldError-BTHn5en7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BusjqWiY.js";import"./flowComponent-BIniq_3P.js";import"./index-CrnjZTlk.js";import"./clsx-B-dksMZM.js";import"./index-B6XMVbfI.js";import"./useLocalizedStringFormatter-BrZnZPcM.js";import"./context-Bqo0meff.js";import"./useRef-D_3PHrag.js";import"./utils-CEh0pYpN.js";import"./ButtonView-RI0SDeqV.js";import"./browser-CLjLvoWS.js";import"./IconWarning-C-Vc31bm.js";import"./remote-BarzyRQ7.js";import"./Text-DZTN4U6B.js";import"./EmulatedBoldText-9YPP8018.js";import"./Text-CBbNcQAF.js";import"./LoadingSpinner-CjHOYBjr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-n3CPGMPO.js";import"./ProgressBar-DY5wp8p-.js";import"./Label-CQzZBBgV.js";import"./Hidden-B4qu7a2v.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2pyCI0i.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqvJUCRP.js";import"./useFocus-CWYeHEaO.js";import"./useFocusRing-Bb1Hz9wK.js";import"./useFocusable-DUuU0sbS.js";import"./ContextMenuSection-DayPbCkQ.js";import"./Dialog-ChZYysky.js";import"./RSPContexts-CP1vSDTy.js";import"./OverlayArrow-DmLbnMba.js";import"./useControlledState-CYdArkzJ.js";import"./Collection-DsLwUV-E.js";import"./CollectionBuilder-De4-ApJw.js";import"./SelectionIndicator-SPKWDPFJ.js";import"./Separator-Ck_PPi-8.js";import"./SelectionManager-CXzqm88-.js";import"./useEvent-CBTrASFt.js";import"./useCollator-Dzxw0xLX.js";import"./FocusScope-BxLI0wxf.js";import"./VisuallyHidden-BGokW8gm.js";import"./getActionGroupSlot-DtLKsNou.js";import"./useStatic-cRv7_xgS.js";import"./context-D9DgwULu.js";import"./useOverlayController-2wquljYS.js";import"./useFieldComponent-C57DTYPz.js";import"./useFilter-xZuDp4NG.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CMQg_soB.js";import"./FieldDescription-w32F_sTG.js";import"./TextField-8qmnCrOw.js";import"./FieldError-CJvsl-v5.js";import"./Form-v3SuS94t.js";import"./Group-C-wWhNg_.js";import"./Input-BZn5pHU1.js";import"./useTextField-DhP7ZCBD.js";import"./useFormReset-BlUfWbi8.js";import"./useFormValidation-CPzq_YrX.js";import"./useControlledHostValueProps-DLOhfg72.js";import"./Popover-Dk2IZtcP.js";import"./OverlayContextProvider-lGzaaamO.js";import"./ListBox-FUiHFtkw.js";import"./DragAndDrop-DYmhY2bx.js";import"./inertValue-gc_Cfhkf.js";import"./useListState-B62sd5L1.js";import"./AlertText-DZAkh8GI.js";import"./AlertIcon-DJdpqIO-.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,te as __namedExportsOrder,ee as default};
