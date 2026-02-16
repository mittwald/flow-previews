import{r as x,j as r}from"./iframe-CdHyQgwh.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-DIOtYJtW.js";import{L as o}from"./Label-C70YwB90.js";import{B as u}from"./Button-B83uT_W5.js";import{S as g}from"./Section-ZayZowyU.js";import{A as b}from"./ActionGroup-CFPYc31d.js";import{s as p}from"./ActionBatch-DZLzYfk2.js";import{N as t}from"./NumberField-BYspgJ_5.js";import{F as E}from"./FieldDescription-BPEDfYs_.js";import{F as S}from"./FieldError-BmlEdUcT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CJo41kua.js";import"./flowComponent-C7-oBhxO.js";import"./index-C1bimC6f.js";import"./clsx-B-dksMZM.js";import"./index--KyPRnlY.js";import"./useLocalizedStringFormatter-UNvRhnZH.js";import"./context--lHaHpmz.js";import"./ActionGroupView-CSh8Io46.js";import"./Content-CeVPKDmn.js";import"./Heading-ChBOMWT5.js";import"./Heading-CxNojwif.js";import"./RSPContexts-DthjkPm0.js";import"./utils-B0AChKxF.js";import"./Text-CG9Jqgcw.js";import"./browser-CBJMDWdB.js";import"./EmulatedBoldText-C0e2olgf.js";import"./Text-CFtcNM5e.js";import"./Modal-DZut7RYA.js";import"./Overlay-BZoP2uMy.js";import"./useOverlayController-Cw4NEVT3.js";import"./useStatic-BBvdmwt_.js";import"./OverlayContextProvider-CjArtki4.js";import"./LoadingSpinner-DJPu7RL-.js";import"./IconWarning-DGc3SgEa.js";import"./remote-BRyh19SP.js";import"./Dialog-DGMm3KA5.js";import"./Button-C8XSc9bU.js";import"./ProgressBar-DEPx6SkE.js";import"./Label-Cm5GkE6R.js";import"./Hidden-DJi7BiD_.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DXx1BftH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DIa0iaS-.js";import"./useFocus-D4xdQDkq.js";import"./useFocusRing-Ba3uGuMn.js";import"./useFocusable-CIZyv2_u.js";import"./OverlayArrow-Lhpnfcsg.js";import"./useControlledState-D2jLiTCX.js";import"./Collection-kJPXxCPQ.js";import"./CollectionBuilder-7T-5iTGH.js";import"./SelectionIndicator-DV4fwApE.js";import"./Separator-DJ7zA3-I.js";import"./SelectionManager-C2VB5dtW.js";import"./useEvent-BCEPVcfC.js";import"./useCollator-DHN-qUKB.js";import"./FocusScope-OuWnR4TG.js";import"./VisuallyHidden-U7btBlyO.js";import"./ButtonView-D4pWD16C.js";import"./Flex-B7-1TfDw.js";import"./useRef-BBhsdY2o.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-1USXN4JB.js";import"./getActionGroupSlot-Bv8pOp0w.js";import"./useFieldComponent-t62DY9AA.js";import"./useControlledHostValueProps-CK9PLT7P.js";import"./FieldError-BTLVyZmC.js";import"./Form-BHZ6w-7V.js";import"./Group-B7D8BaP2.js";import"./Input-DK8ERkio.js";import"./useFormValidation-8M-A-L7s.js";import"./useSpinButton-BhBsv142.js";import"./useFormReset-D88R_CF2.js";import"./useTextField-BoVwwEYl.js";import"./AlertText-DldHmlNs.js";import"./AlertIcon-yA83KE1p.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
