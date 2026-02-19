import{r as g,j as r}from"./iframe-DYssR0ZO.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-C46gT09w.js";import{B as f}from"./Button-DWrm_dbc.js";import{S as E}from"./Section-DXlc0Qej.js";import{A as T}from"./ActionGroup-R3KZtlTh.js";import{s as u}from"./ActionBatch-Cjtwd20r.js";import{A as i}from"./Autocomplete-5zgZ3hUH.js";import{L as p}from"./Label-D9oETDcN.js";import{T as l}from"./TextField-CcRyLWii.js";import{O as B}from"./Option-DmAenmzB.js";import{F as A}from"./FieldError-BB68CtMB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-3BYImiyG.js";import"./flowComponent-DsQfvZ8R.js";import"./index-BiQ39dcD.js";import"./clsx-B-dksMZM.js";import"./index-DD53_4h2.js";import"./useLocalizedStringFormatter-lpvT_cvb.js";import"./context-CUXiPoRo.js";import"./ActionGroupView-HsrfXwWr.js";import"./Content-B3-6LeFE.js";import"./Heading-De8T3vTM.js";import"./Heading-CZjnkckI.js";import"./RSPContexts-CDW_96-t.js";import"./utils-C3q1cDFY.js";import"./Text-S9F4vE2H.js";import"./browser-BciskJv3.js";import"./EmulatedBoldText-BT8wvojV.js";import"./Text-C48KhL8P.js";import"./Modal-CmAFXMHf.js";import"./useOverlayController-BfbCDLsY.js";import"./useStatic-BJkvCPdg.js";import"./Overlay-CBBWFTg2.js";import"./OverlayContextProvider-C4hsr81s.js";import"./LoadingSpinner-lL7MHRW7.js";import"./IconWarning-BhLXBIfL.js";import"./remote-cHYIdIzb.js";import"./Dialog-DF_yv1N5.js";import"./Button-Dmp7BHEZ.js";import"./ProgressBar-RP_su0Fk.js";import"./Label-DSpHRERt.js";import"./Hidden-CFJfk2M-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BksUhJpA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-xSc99ptM.js";import"./useFocus-CQpADUyl.js";import"./useFocusRing-CMEZAWj2.js";import"./useFocusable-CmCmEjiW.js";import"./OverlayArrow-Cf72_x8q.js";import"./useControlledState-CDSB3NYp.js";import"./Collection-DXdmtnJo.js";import"./CollectionBuilder-rMlba9-K.js";import"./SelectionIndicator-02MGjaw1.js";import"./Separator-DtudkoI4.js";import"./SelectionManager-CofrV8Dv.js";import"./useEvent-fKqzN6WM.js";import"./useCollator-CCP6S8mH.js";import"./FocusScope-CNZRDNpk.js";import"./VisuallyHidden-B8I9N7kv.js";import"./ButtonView-BsRNqhDl.js";import"./Flex-CDdSdzbN.js";import"./useRef-3pdhvvGy.js";import"./ContextMenuSection-DyHCMP-N.js";import"./getActionGroupSlot-CBN4XHqD.js";import"./useFieldComponent-MDeHyLVI.js";import"./useFilter-mVta8hM_.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-cssSA_4f.js";import"./FieldDescription-DK9jbbdr.js";import"./TextField-DDrLnvFP.js";import"./FieldError-Bq-6FZKj.js";import"./Form-C_ZwOWyd.js";import"./Group-DDubxubJ.js";import"./Input-VZe-sw4J.js";import"./useTextField-BW8H2oZa.js";import"./useFormReset-CxfaiCUr.js";import"./useFormValidation-D1fghWFH.js";import"./Popover-BQzuMW4U.js";import"./ListBox-CZjILdVF.js";import"./DragAndDrop-RU1wWlBg.js";import"./inertValue-BUasF3p8.js";import"./useListState-Bbyypg0Z.js";import"./AlertText-rFllmFTn.js";import"./AlertIcon-AvW8zEgb.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ne=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ne as __namedExportsOrder,se as default};
