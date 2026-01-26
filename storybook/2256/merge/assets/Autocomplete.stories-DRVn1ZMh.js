import{j as r,r as g}from"./iframe-Bc-jwLWq.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-BFkMdFPI.js";import{B as f}from"./Button-DRfNiyCG.js";import{S as E}from"./Section-DeLGaA3j.js";import{A as T}from"./ActionGroup-FKzgV-D_.js";import{s as u}from"./Action-BW1QHV35.js";import{A as i}from"./Autocomplete-B_cK75YL.js";import{L as p}from"./Label-p4o9WkV1.js";import{T as l}from"./TextField-BYPJVCyH.js";import{O as B}from"./Option-CgyaUPyy.js";import{F as A}from"./FieldError-Cp2fPOrN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTlJFVeg.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./clsx-B-dksMZM.js";import"./index-Ct8kadYq.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./context-BDmep644.js";import"./useRef-BXGxKB79.js";import"./utils-BIv87FRG.js";import"./ButtonView-BKhjZf5-.js";import"./browser-Cfl6H5sa.js";import"./IconWarning-BPpigV-o.js";import"./remote-CficONz5.js";import"./Text-Bs06tnQB.js";import"./EmulatedBoldText-CZY7LDuf.js";import"./Text-DgSTzWgU.js";import"./LoadingSpinner-D9DMVpgJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-HPdphaJl.js";import"./ProgressBar-CdyMER2G.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BfZDlGh7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NBjG5NMF.js";import"./useFocus-C6ldElRQ.js";import"./useFocusRing-B0jLa-Vk.js";import"./useFocusable-DIXmUg59.js";import"./ContextMenuSection-DJB6II09.js";import"./Dialog-BLkrUNfj.js";import"./RSPContexts-pS-AnHir.js";import"./OverlayArrow-C2KXIoV9.js";import"./useControlledState-IlB9I5Xo.js";import"./Collection-BCq2XeeE.js";import"./CollectionBuilder-CKD3RAIJ.js";import"./SelectionIndicator-BwDlTF6c.js";import"./Separator-jBiWh72R.js";import"./SelectionManager-Bz5s9XnK.js";import"./useEvent-sz969hj6.js";import"./useCollator-XCIFooBT.js";import"./FocusScope-Bs4WKWZW.js";import"./VisuallyHidden-CmlM99K4.js";import"./getActionGroupSlot-DJ6HE5sS.js";import"./useStatic-D2AFXt6d.js";import"./context-CAc_7aQG.js";import"./useOverlayController-DoFosNgE.js";import"./useFieldComponent-ahSSNXad.js";import"./useFilter-CNJsXQml.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-C0T21KTJ.js";import"./FieldDescription-CxtFvhlF.js";import"./TextField-qgwh5fDT.js";import"./FieldError-CGIyNVOV.js";import"./Form-DqUF-Ufv.js";import"./Group-I4ZSji5i.js";import"./Input-fHIZlSCw.js";import"./useTextField-C1Foi7Jk.js";import"./useFormReset-DFcj21LA.js";import"./useFormValidation-DyPlpM72.js";import"./useControlledHostValueProps-DoY3RCm0.js";import"./Popover-BnXLjntA.js";import"./OverlayContextProvider-BB6WVLCg.js";import"./ListBox-DYT-nHIr.js";import"./DragAndDrop-C-VmhkLe.js";import"./inertValue-CPdae_GY.js";import"./useListState-CS1WeCsH.js";import"./AlertText-COarWx13.js";import"./AlertIcon-DCb6GQr1.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
