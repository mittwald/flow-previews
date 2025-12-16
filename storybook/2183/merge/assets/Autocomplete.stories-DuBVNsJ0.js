import{j as r,r as g}from"./iframe-ZqGKWCd-.js";import{u as c,F as d}from"./Form-CcP053Cr.js";import{t as b,F as h}from"./Field-DKdtFAdD.js";import{B as f}from"./Button-BZgO5jCY.js";import{S as E}from"./Section-DNOHRVt7.js";import{A as T}from"./ActionGroup-XBaLTsJ-.js";import{s as u}from"./Action-DfNxqrNn.js";import{A as i}from"./Autocomplete-CZ7tTYja.js";import{L as p}from"./Label-CJicQH7Q.js";import{T as l}from"./TextField-p_NOS6CA.js";import{O as B}from"./Option-BgW-Do6V.js";import{F as A}from"./FieldError-LLBE4o9B.js";import{R as F}from"./ResetButton-B-6Xauvq.js";import{S as x}from"./SubmitButton-DCPlWDSV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BUvHTeNk.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-BXzH9RDF.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./clsx-B-dksMZM.js";import"./index-BS5rk3Xg.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./context-zCArMZyI.js";import"./IconChevronDown-DOkopHOS.js";import"./remote-QKtGQrQi.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./Text-fsbk1lYn.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./utils-D141Jr51.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CUB1U94R.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_yC0x0cS.js";import"./useFocus-DhU9eZJ-.js";import"./useFocusRing-DbADFAxV.js";import"./useFocusable-BybslKHd.js";import"./ContextMenuSection-CSh4hkta.js";import"./lib-90ocxLs-.js";import"./Dialog-CUnVff-C.js";import"./RSPContexts-SeDUPtJk.js";import"./OverlayArrow-CDGB6Pw4.js";import"./useControlledState-CXUvh1Us.js";import"./Collection-CvOok_qh.js";import"./CollectionBuilder-BKjwMGq6.js";import"./SelectionIndicator-JiamtxED.js";import"./Separator-wVg1dl70.js";import"./SelectionManager-CZWi_Odb.js";import"./useEvent-U8AR1Bww.js";import"./useCollator-uzPz00g8.js";import"./FocusScope-CNoX19qM.js";import"./VisuallyHidden-Izi45t00.js";import"./getActionGroupSlot-B6JbQYyf.js";import"./useStatic-CPFMlQst.js";import"./context-C6xdvZ0U.js";import"./useFieldComponent-B1bOh1KR.js";import"./useFilter-U78a7tNX.js";import"./useOverlayController-vqkxV1o1.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CVMJXfOH.js";import"./FieldDescription-CtBJlXxf.js";import"./TextField-BlpbMoN1.js";import"./FieldError-D5ElVx7m.js";import"./Form-CbKBfjBg.js";import"./Group-LIjHZE_9.js";import"./Input-kDKiG0mN.js";import"./useTextField-B0bavF7F.js";import"./useFormReset-L-nmEJr1.js";import"./useFormValidation-EOc_OYLE.js";import"./useControlledHostValueProps-tmC5-mDa.js";import"./Popover-DwfGd10d.js";import"./OverlayContextProvider-Dy2hc-Zf.js";import"./ListBox-CACG9Doz.js";import"./DragAndDrop-w7vbyrTW.js";import"./inertValue-CfLiWmfK.js";import"./useListState-9Cwm_sFS.js";import"./IconDanger-9fNDXdlu.js";import"./useRef-BCaKMhrQ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
