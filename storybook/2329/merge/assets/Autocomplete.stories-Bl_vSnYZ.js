import{r as g,j as r}from"./iframe-DU1OTSEW.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-BsyJpF7l.js";import{B as f}from"./Button-C02FBbwW.js";import{S as E}from"./Section-DIfoCaa5.js";import{A as T}from"./ActionGroup-BZNfB_OW.js";import{s as u}from"./ActionBatch-BeODW9YZ.js";import{A as i}from"./Autocomplete-sSo8aZez.js";import{L as p}from"./Label-BFsMAETu.js";import{T as l}from"./TextField-6wXmNrzX.js";import{O as B}from"./Option-BQCKHLGx.js";import{F as A}from"./FieldError-lAQ6GllT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTXPuCk3.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./clsx-B-dksMZM.js";import"./index-Ben_k6_D.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./context-MHXBCA58.js";import"./ActionGroupView-ZPgNa0UK.js";import"./Content-BXIdNakr.js";import"./Heading-Cl160jiD.js";import"./Heading-D1wlHBOV.js";import"./RSPContexts-CELva0rI.js";import"./utils-Dj7KEBV3.js";import"./Text-BlwSaqXM.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";import"./Text-iBzBCpEi.js";import"./Modal-D00g1B7I.js";import"./useOverlayController-CN_E_UXR.js";import"./useStatic-B4QbuKZS.js";import"./Overlay-DxVOVPlK.js";import"./OverlayContextProvider-CEpEJiOz.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./IconWarning-BOLd-bsg.js";import"./remote-C4J6eDzq.js";import"./Dialog-rIHNVDTB.js";import"./Button-njBxl16I.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3DB9qnR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DCIqPyrL.js";import"./useFocus-u6Gylu9g.js";import"./useFocusRing-L_sy4AuI.js";import"./useFocusable-XjJjjkQd.js";import"./OverlayArrow-Bh5zDL_J.js";import"./useControlledState-C4NYpY3o.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./SelectionIndicator-BBXAzCHo.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";import"./ButtonView-B-0Eh3g3.js";import"./Flex-hLK_L7IW.js";import"./useRef-BOtMNj3F.js";import"./ContextMenuSection-B26kJYav.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./useFieldComponent-DAmXFBUF.js";import"./useFilter-BqE3mfEP.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-FQAX2oVh.js";import"./FieldDescription-BeeLUpCG.js";import"./TextField-Dvb4Cwl8.js";import"./FieldError-C-1FXxCh.js";import"./Form-DFVlj26J.js";import"./Group-DFJoPzzo.js";import"./Input-BRq7uXwq.js";import"./useTextField-BJo9NeBV.js";import"./useFormReset-B6aj4tVR.js";import"./useFormValidation-Bnl6yMKM.js";import"./Popover-DKS3uTEp.js";import"./ListBox-DtrxFCms.js";import"./DragAndDrop-CG_XkGkN.js";import"./inertValue-Bw78kgW5.js";import"./useListState-DQLIl_YK.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
