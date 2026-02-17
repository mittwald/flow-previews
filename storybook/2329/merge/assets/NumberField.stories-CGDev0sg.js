import{r as x,j as r}from"./iframe-DU1OTSEW.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-BsyJpF7l.js";import{L as o}from"./Label-BFsMAETu.js";import{B as u}from"./Button-C02FBbwW.js";import{S as g}from"./Section-DIfoCaa5.js";import{A as b}from"./ActionGroup-BZNfB_OW.js";import{s as p}from"./ActionBatch-BeODW9YZ.js";import{N as t}from"./NumberField-DVTUyCJa.js";import{F as E}from"./FieldDescription-BeeLUpCG.js";import{F as S}from"./FieldError-lAQ6GllT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BTXPuCk3.js";import"./flowComponent-C_TICRXM.js";import"./index-nIZOvY-k.js";import"./clsx-B-dksMZM.js";import"./index-Ben_k6_D.js";import"./useLocalizedStringFormatter-npOcqoB_.js";import"./context-MHXBCA58.js";import"./ActionGroupView-ZPgNa0UK.js";import"./Content-BXIdNakr.js";import"./Heading-Cl160jiD.js";import"./Heading-D1wlHBOV.js";import"./RSPContexts-CELva0rI.js";import"./utils-Dj7KEBV3.js";import"./Text-BlwSaqXM.js";import"./browser-B-EQy8Zd.js";import"./EmulatedBoldText-IXPdWydI.js";import"./Text-iBzBCpEi.js";import"./Modal-D00g1B7I.js";import"./useOverlayController-CN_E_UXR.js";import"./useStatic-B4QbuKZS.js";import"./Overlay-DxVOVPlK.js";import"./OverlayContextProvider-CEpEJiOz.js";import"./LoadingSpinner-7mWb9Q3Q.js";import"./IconWarning-BOLd-bsg.js";import"./remote-C4J6eDzq.js";import"./Dialog-rIHNVDTB.js";import"./Button-njBxl16I.js";import"./ProgressBar-ZiPbwj7h.js";import"./Label-BJoTK4AB.js";import"./Hidden-UY4SCaak.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3DB9qnR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DCIqPyrL.js";import"./useFocus-u6Gylu9g.js";import"./useFocusRing-L_sy4AuI.js";import"./useFocusable-XjJjjkQd.js";import"./OverlayArrow-Bh5zDL_J.js";import"./useControlledState-C4NYpY3o.js";import"./Collection-BgHGMK_M.js";import"./CollectionBuilder-D9jRpqx4.js";import"./SelectionIndicator-BBXAzCHo.js";import"./Separator-ezkSicQA.js";import"./SelectionManager-BMrQ3jem.js";import"./useEvent-BUR3uY3V.js";import"./useCollator-BcGn8FjN.js";import"./FocusScope-BR4Z_k_s.js";import"./VisuallyHidden---d_BDnt.js";import"./ButtonView-B-0Eh3g3.js";import"./Flex-hLK_L7IW.js";import"./useRef-BOtMNj3F.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B26kJYav.js";import"./getActionGroupSlot-DUS5YLbg.js";import"./useFieldComponent-DAmXFBUF.js";import"./useControlledHostValueProps-FQAX2oVh.js";import"./FieldError-C-1FXxCh.js";import"./Form-DFVlj26J.js";import"./Group-DFJoPzzo.js";import"./Input-BRq7uXwq.js";import"./useFormValidation-Bnl6yMKM.js";import"./useSpinButton-kaAdWVw6.js";import"./useFormReset-B6aj4tVR.js";import"./useTextField-BJo9NeBV.js";import"./AlertText-DRGtE0Z7.js";import"./AlertIcon-_4be_GIR.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
