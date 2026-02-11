import{r as g,j as r}from"./iframe-BBLgQM8W.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-BLMx4wj7.js";import{B as f}from"./Button-B_d3OkSN.js";import{S as E}from"./Section-BqYCDxKj.js";import{A as T}from"./ActionGroup-DI2Kr1jI.js";import{s as u}from"./Action-vczYGY_C.js";import{A as i}from"./Autocomplete-Bxf0_FE9.js";import{L as p}from"./Label-BQdcxq0o.js";import{T as l}from"./TextField-CfH-DE-y.js";import{O as B}from"./Option-BoKU8sXw.js";import{F as A}from"./FieldError-DAXPSsyp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-De16JUVi.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./clsx-B-dksMZM.js";import"./index-CC4aSS2B.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./context-CbfWsJFN.js";import"./useRef-BADtkrSm.js";import"./utils-Bzwl2RbX.js";import"./ButtonView-BpODKVdh.js";import"./browser-DI7yhJk5.js";import"./IconWarning-CmmOPW6y.js";import"./remote-Vne7hGXH.js";import"./Text-DyzGue3k.js";import"./EmulatedBoldText-BZaUBYn6.js";import"./Text-C-vmddAy.js";import"./LoadingSpinner-CfkxbS8M.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-M7FHgNE8.js";import"./ProgressBar-C8xfeLyO.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-65Ti_lew.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DXblhpXj.js";import"./useFocus-atMo-T8H.js";import"./useFocusRing-XNEcT-2-.js";import"./useFocusable-BlOp3ek5.js";import"./ContextMenuSection-DowsXKqD.js";import"./Dialog-ErohAvYc.js";import"./RSPContexts-CYvfEZEC.js";import"./OverlayArrow-DOWztXxW.js";import"./useControlledState-Cx-WZngS.js";import"./Collection-D0FsBWET.js";import"./CollectionBuilder-B0O9WQSu.js";import"./SelectionIndicator-CxHxHFYG.js";import"./Separator-Du5IBTyX.js";import"./SelectionManager-Qclabrtm.js";import"./useEvent-xi19_WIE.js";import"./useCollator--gNzNCc1.js";import"./FocusScope-BuBo0u5V.js";import"./VisuallyHidden-DReBsRIr.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./useStatic-DeJLZZ0I.js";import"./context-On8QMk-S.js";import"./useOverlayController-DLo4JLQx.js";import"./useFieldComponent-BfDJ4pJf.js";import"./useFilter-CGz2Ntt4.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-B2sB3Iit.js";import"./FieldDescription-DUGpusEG.js";import"./TextField-Q9Ty2K7p.js";import"./FieldError-CxkPyMXc.js";import"./Form-WOMIl9aS.js";import"./Group-CsgCBTlF.js";import"./Input-BnTyB-6W.js";import"./useTextField-BP4XIi7T.js";import"./useFormReset-4n7xFzn-.js";import"./useFormValidation-DAic1NnU.js";import"./Popover-B9sG1hlB.js";import"./OverlayContextProvider-U24Exh3e.js";import"./ListBox-XfQfg6g8.js";import"./DragAndDrop-DytZ5VTb.js";import"./inertValue-CLmE_MPX.js";import"./useListState-DVKtdp2v.js";import"./AlertText-B4ActtEe.js";import"./AlertIcon-CiXM2S_P.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ee as __namedExportsOrder,re as default};
