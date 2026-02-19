import{r as x,j as r}from"./iframe-je41IZNf.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-C7YuCwWl.js";import{L as o}from"./Label--ERuqbAg.js";import{B as u}from"./Button-CKqcv5FO.js";import{S as g}from"./Section-DOpZVh4G.js";import{A as b}from"./ActionGroup-rchol9jY.js";import{s as p}from"./ActionBatch-ChKsIRTP.js";import{N as t}from"./NumberField-BvQZObno.js";import{F as E}from"./FieldDescription-epssNn7d.js";import{F as S}from"./FieldError-BATB6zBo.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrtagzWP.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./clsx-B-dksMZM.js";import"./index-DBepN-OD.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./context-533DYF-u.js";import"./ActionGroupView-CNDRVPWd.js";import"./Content-CI6m-d_y.js";import"./Heading-Bj867S3k.js";import"./Heading-0rwlvdDR.js";import"./RSPContexts-u6z1ubPU.js";import"./utils-Q4wA2zXG.js";import"./Text-BC-RZ7k4.js";import"./browser-Drae5Vqb.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Text-DidYm6nP.js";import"./Modal-CPZv7ujk.js";import"./useOverlayController-BUOVgKeB.js";import"./useStatic-DB-qeJ4V.js";import"./Overlay-B0VzEzJb.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./LoadingSpinner-DltTQrQc.js";import"./IconWarning-Bnxn-M7Y.js";import"./remote-CVh73cse.js";import"./Dialog-BA8GDzQ6.js";import"./Button-Bv1GWar0.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcrJWT2n.js";import"./useFocus-YEPBe3OK.js";import"./useFocusRing-DOADtTnm.js";import"./useFocusable-Ldg9iOHo.js";import"./OverlayArrow-7pXV33mr.js";import"./useControlledState-Behjjcy6.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./ButtonView-Dl5Y4ZWm.js";import"./Flex--JtxxRJ0.js";import"./useRef-DwDjpRrm.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-D3nZCtKg.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./useFieldComponent-b8-F_AVa.js";import"./useControlledHostValueProps-BR1UJYKe.js";import"./FieldError-MnbTPawu.js";import"./Form-D8X7JUv8.js";import"./Group-D7ryvxcR.js";import"./Input-U4HmeWQK.js";import"./useFormValidation-DLIHXRbT.js";import"./useSpinButton-DhtN8mAV.js";import"./useFormReset-BAaFkhxA.js";import"./useTextField-D9CsxYKW.js";import"./AlertText-B3BG9g2L.js";import"./AlertIcon-g4_I2qja.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
