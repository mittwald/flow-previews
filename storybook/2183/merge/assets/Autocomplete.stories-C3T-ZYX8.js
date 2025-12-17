import{j as r,r as g}from"./iframe-BsCnutBU.js";import{u as c,F as d}from"./Form-BTeyd2P5.js";import{t as b,F as h}from"./Field-DEtzRgkR.js";import{B as f}from"./Button-PMfVxp4L.js";import{S as E}from"./Section-C1RjpY9f.js";import{A as T}from"./ActionGroup-B3HbARs1.js";import{s as u}from"./Action-CDxlZfJH.js";import{A as i}from"./Autocomplete-9ewK73s7.js";import{L as p}from"./Label-DBiwGOqI.js";import{T as l}from"./TextField-BdOqnFok.js";import{O as B}from"./Option-DGaKI1or.js";import{F as A}from"./FieldError-CJPS-seQ.js";import{R as F}from"./ResetButton-CQkSIzTo.js";import{S as x}from"./SubmitButton-Cjg-acN2.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-b7DWXv2S.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-DlsVuPIo.js";import"./flowComponent-DoLxyVDl.js";import"./index-xZbZEtqW.js";import"./clsx-B-dksMZM.js";import"./index-PlwcbQcr.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./context-DzQn9XcF.js";import"./IconChevronDown-C43PU1K-.js";import"./remote-LwvHvQd9.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./Text-CNxpKe1i.js";import"./EmulatedBoldText-DyWG-htd.js";import"./Text-BOWjpC0c.js";import"./utils-Dcbzlj6n.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YTgHheMP.js";import"./ProgressBar-BvRvte-F.js";import"./Label-B_59qcJ5.js";import"./Hidden-gYrC-ftW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiTBxdfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHCx2MC1.js";import"./useFocus-zRbhNQvs.js";import"./useFocusRing-eAFZ6BYE.js";import"./useFocusable-Czch9xtI.js";import"./ContextMenuSection-DnLRDkoA.js";import"./lib-90ocxLs-.js";import"./Dialog-CUr7rK7w.js";import"./RSPContexts-Dp9qqhDW.js";import"./OverlayArrow-D6gKPtoN.js";import"./useControlledState-CigtIRD8.js";import"./Collection-C8-9jDK9.js";import"./CollectionBuilder-CJjXf3Iw.js";import"./SelectionIndicator-Baq8cblo.js";import"./Separator-BirN-56R.js";import"./SelectionManager-QwxvBoUZ.js";import"./useEvent-CvU6uOe-.js";import"./useCollator-O8BhpWis.js";import"./FocusScope-Bn9eK5Im.js";import"./VisuallyHidden-xvADZrl6.js";import"./getActionGroupSlot-D8KutjkD.js";import"./useStatic-BIAK3C1m.js";import"./context-bnUckVor.js";import"./useFieldComponent-DKQov8fN.js";import"./useFilter-BbiUq3sx.js";import"./useOverlayController-L26AuVnv.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-D8kM67Si.js";import"./FieldDescription-DXa041T4.js";import"./TextField-B_R29ctY.js";import"./FieldError-oQwctYYH.js";import"./Form-te5EpUcA.js";import"./Group-zOLkyEJm.js";import"./Input-XkH6LSV2.js";import"./useTextField-DPa3Dmxj.js";import"./useFormReset-DwCUeF5J.js";import"./useFormValidation-hrdfW_GO.js";import"./useControlledHostValueProps-B2GrztKn.js";import"./Popover-B0nFn5So.js";import"./OverlayContextProvider-CIRTZSGG.js";import"./ListBox-B0JDSHAa.js";import"./DragAndDrop-Bnowwrhm.js";import"./inertValue-U-PoKmyi.js";import"./useListState-BIURgE3X.js";import"./IconDanger-d9R36P01.js";import"./useRef-CoHtiAMY.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
