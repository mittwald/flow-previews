import{j as r,r as g}from"./iframe-DcHapM8k.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-CulSlpBz.js";import{B as f}from"./Button-C1DQEdG6.js";import{S as E}from"./Section-BLxdCMFP.js";import{A as T}from"./ActionGroup-Bnr4k_2X.js";import{s as u}from"./Action-CLgptl7p.js";import{A as i}from"./Autocomplete-Bx7I2VQY.js";import{L as p}from"./Label-C_3MZF40.js";import{T as l}from"./TextField-Cgs2HDgY.js";import{O as B}from"./Option-CxdnenET.js";import{F as A}from"./FieldError-BzyrakFb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-FNOw2F.js";import"./flowComponent-F2rlWCYo.js";import"./index-DtEczAXX.js";import"./clsx-B-dksMZM.js";import"./index-Ba4Wgmch.js";import"./useLocalizedStringFormatter--D1phWvd.js";import"./context-Camfekg3.js";import"./useRef-JV7f1HAx.js";import"./utils-BN-Wf9GB.js";import"./ButtonView-Bx--fAkF.js";import"./browser-BhJkGPhR.js";import"./IconWarning-8t1q80cl.js";import"./remote-CrHpKc5j.js";import"./Text-BqUUaAMX.js";import"./EmulatedBoldText-BsmORSBd.js";import"./Text-KTnK0cez.js";import"./LoadingSpinner-DeuQI20n.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGX0xFqX.js";import"./ProgressBar-Dz7b_e2x.js";import"./Label-Cc29pwI9.js";import"./Hidden-BBxp_Bwo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVAEGcEm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DRRwHOXQ.js";import"./useFocus-ZXD30Rmm.js";import"./useFocusRing-Dt3gTaal.js";import"./useFocusable-CPQk5Kbw.js";import"./ContextMenuSection-Bxsn88Zf.js";import"./Dialog-gML-GktL.js";import"./RSPContexts-DXTQnhuO.js";import"./OverlayArrow-Ct2arrPt.js";import"./useControlledState-CD18I4-6.js";import"./Collection-y5T8eap-.js";import"./CollectionBuilder-edhcBSCU.js";import"./SelectionIndicator-nDWEY-Pb.js";import"./Separator-DyT19d9_.js";import"./SelectionManager-cayBw_JG.js";import"./useEvent-FsYqvuuv.js";import"./useCollator-CvGBdlrR.js";import"./FocusScope-DwQWTV3n.js";import"./VisuallyHidden-ZuD5qc8D.js";import"./getActionGroupSlot-BZTJVxAa.js";import"./useStatic-lCMR7rr_.js";import"./context-C5BkLhj5.js";import"./useOverlayController-CLiM05Jw.js";import"./useFieldComponent-DLXIz4kk.js";import"./useFilter-BizLkOR1.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DHsTWBUF.js";import"./FieldDescription-C8ShlXx2.js";import"./TextField-C4vDdw6V.js";import"./FieldError-DeohvbOn.js";import"./Form-N_ssJC2Q.js";import"./Group-cOoV5f3K.js";import"./Input-_1JxoJ2g.js";import"./useTextField-t09HgXOF.js";import"./useFormReset-DByFRxt8.js";import"./useFormValidation-C5Tej2mU.js";import"./useControlledHostValueProps-BzOdOIBK.js";import"./Popover-8k6-3DAC.js";import"./OverlayContextProvider-By_DTOub.js";import"./ListBox-Cchr3A3c.js";import"./DragAndDrop-DoG_xJcD.js";import"./inertValue-BRnF-OX7.js";import"./useListState-1YxHOYTr.js";import"./AlertText-CmRq4USe.js";import"./AlertIcon-aSf31ti-.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
