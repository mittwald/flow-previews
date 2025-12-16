import{j as r,r as g}from"./iframe-DlUIOFNy.js";import{u as c,F as d}from"./Form-B3n9ilz9.js";import{B as f}from"./Button-Dl6JLVXM.js";import{S as b}from"./Section-CCNaa6u5.js";import{A as E}from"./ActionGroup-CLnuw2R2.js";import{s as u}from"./Action-DzYQUuQL.js";import{A as i}from"./Autocomplete-Bq42vbO4.js";import{L as p}from"./Label-CGwVPH1O.js";import{T as l}from"./TextField-T3f0Lq7d.js";import{O as T}from"./Option-_MaTpAtA.js";import{F as B}from"./FieldError-C8EsLVOD.js";import{R as h}from"./ResetButton-DiquHNcP.js";import{t as A,F}from"./Field-Bkg-HUj_.js";import{S as x}from"./SubmitButton-TbwUFVd5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-CY6W5xXv.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./index-DAMde4kY.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./Text-D41gwIdF.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./utils-D5WuX1D5.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Button-Dr7P9UDM.js";import"./ProgressBar-D4eaRwno.js";import"./Label-BWWfC27r.js";import"./Hidden-DbzQNSr6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./ContextMenuSection-tuIgae_F.js";import"./lib-90ocxLs-.js";import"./Dialog-DGrRsJNk.js";import"./RSPContexts-C5mxBSfV.js";import"./OverlayArrow-s4mQFeA0.js";import"./useControlledState-UrSorjA0.js";import"./Collection-D_tRRyiE.js";import"./CollectionBuilder-BlmCb_Ne.js";import"./SelectionIndicator-D7Xg-XgX.js";import"./Separator-DsGP9-jg.js";import"./SelectionManager-d7GSdIRe.js";import"./useEvent-D0ZZFMyT.js";import"./useCollator-eBEmYcKu.js";import"./FocusScope-DE5dWl6n.js";import"./VisuallyHidden-DYOAHIEH.js";import"./dynamic-C-FseJcp.js";import"./getActionGroupSlot-WDsmZJCA.js";import"./useStatic-DqJu_u90.js";import"./context-C1nEnAeo.js";import"./useFieldComponent-BCd2OtQE.js";import"./useFilter-B7raD_IX.js";import"./useOverlayController-BohxaX_S.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Be-4j_zV.js";import"./FieldDescription-DPdg4_M-.js";import"./TextField-C8QCetjF.js";import"./FieldError-D3SsQY4t.js";import"./Form-BRPBFW97.js";import"./Group-CJxedSyo.js";import"./Input-lQWi8Z-8.js";import"./useTextField-OgNJ0RzM.js";import"./useFormReset-Bdg2NgY2.js";import"./useFormValidation-DSe2mHjT.js";import"./useControlledHostValueProps-DysohucN.js";import"./Popover-Dfl3inpo.js";import"./OverlayContextProvider-Dbmlj_yb.js";import"./ListBox-D5SH-bE5.js";import"./DragAndDrop-D-BWV8sK.js";import"./inertValue-DJZsakAe.js";import"./useListState-DhzwL1cS.js";import"./IconDanger-BLbNCJeo.js";import"./useRef-1BWU2Cdw.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=A(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(E,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,pe as __namedExportsOrder,ne as default};
