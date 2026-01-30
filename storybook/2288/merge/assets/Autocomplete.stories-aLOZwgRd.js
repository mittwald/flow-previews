import{j as r,r as g}from"./iframe-l1bkuF5f.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-Bus3ZjXK.js";import{B as f}from"./Button-pfxdB-3A.js";import{S as E}from"./Section-CZdVIDcK.js";import{A as T}from"./ActionGroup-Bk_92t7d.js";import{s as u}from"./Action-DCncdG_g.js";import{A as i}from"./Autocomplete-C38EOmjb.js";import{L as p}from"./Label-DX1aPacI.js";import{T as l}from"./TextField-Bkju6mzP.js";import{O as B}from"./Option-CaNfhst3.js";import{F as A}from"./FieldError-mREW9pPY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrVBKZhY.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./clsx-B-dksMZM.js";import"./index-BcUcgGWs.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./useRef-rZqwvUwE.js";import"./utils-DCQYs-TM.js";import"./ButtonView-8r0sbocL.js";import"./browser-BVqvvpC_.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./Text-BKhP8tr9.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEqZlFux.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocusable-D4tCxmX8.js";import"./ContextMenuSection-ktUqVNzZ.js";import"./Dialog-DkFD9hxJ.js";import"./RSPContexts-D359D01x.js";import"./OverlayArrow-D02QNQ8I.js";import"./useControlledState-BZaI1cg9.js";import"./Collection-DHw8h3FC.js";import"./CollectionBuilder-BxR2eRiM.js";import"./SelectionIndicator-8EnZgCgK.js";import"./Separator-CBgmYkk4.js";import"./SelectionManager-D4DTSuSz.js";import"./useEvent-F8xm2saN.js";import"./useCollator-Cf6z8j_R.js";import"./FocusScope-CXOryEg0.js";import"./VisuallyHidden-GyOwAGCf.js";import"./getActionGroupSlot-Cs9bLGLr.js";import"./useStatic-BFe86sAb.js";import"./context-DTty7kAQ.js";import"./useOverlayController-C6j4pd50.js";import"./useFieldComponent-C26zWsIy.js";import"./useFilter-oC6DuE5_.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-C96gnXCu.js";import"./FieldDescription-D6vtnelM.js";import"./TextField-CVOy62IB.js";import"./FieldError-DlCb0goX.js";import"./Form-C3oxrYxL.js";import"./Group-DMPrUoj7.js";import"./Input-DWCi9_rf.js";import"./useTextField-L-wLu2nH.js";import"./useFormReset-B-5bGtDV.js";import"./useFormValidation-CUmRTDZB.js";import"./useControlledHostValueProps--S7JGTy0.js";import"./Popover-DwVIQaA1.js";import"./OverlayContextProvider-DvOu6vjy.js";import"./ListBox-BGNC7woy.js";import"./DragAndDrop-BvSSUnKW.js";import"./inertValue-DH1d3vcb.js";import"./useListState-EH44bKo5.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
