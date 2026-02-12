import{r as x,j as r}from"./iframe-jPI25t47.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-B5ZX2fMA.js";import{L as o}from"./Label-CVxkn5sg.js";import{B as u}from"./Button-CMdL10Ys.js";import{S as g}from"./Section-wgX4yeQq.js";import{A as b}from"./ActionGroup-19L6oHyS.js";import{s as p}from"./ActionBatch-DVEQdHps.js";import{N as t}from"./NumberField-ArG2vBmk.js";import{F as E}from"./FieldDescription-BijM-gJh.js";import{F as S}from"./FieldError-DPfGZS1P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DcvTJJQa.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./clsx-B-dksMZM.js";import"./index-mBlsDuvj.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./ActionGroupView-BqWWBXhU.js";import"./Content-KabCAW67.js";import"./Heading-BYBgSNBh.js";import"./Heading-BvtnHnmW.js";import"./RSPContexts-COITpNJr.js";import"./utils-DssEHlsW.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./Modal-CdjOxPJU.js";import"./Overlay-BMoI33va.js";import"./useOverlayController-Cy5LcSUF.js";import"./useStatic-Be080qZz.js";import"./OverlayContextProvider-BkQ_ixfe.js";import"./LoadingSpinner-DhHtGG23.js";import"./IconWarning-D8uDJDej.js";import"./remote-B_as-6Bm.js";import"./Dialog-C4XHiXzR.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./ButtonView-quZyuTrS.js";import"./Flex-DvdXj1RM.js";import"./useRef-XiRQpzNC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BG427zDb.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./useFieldComponent-CHdLkU8r.js";import"./useControlledHostValueProps-AQocOlOa.js";import"./FieldError-C3mwkvrq.js";import"./Form-BeysAUF2.js";import"./Group-CAA0eQzC.js";import"./Input-DUaj7rN4.js";import"./useFormValidation-aAlw1sTR.js";import"./useSpinButton-Dy8IMmq-.js";import"./useFormReset-DGTIvKtn.js";import"./useTextField-BD2R3zQz.js";import"./AlertText-D2z5AzT8.js";import"./AlertIcon-HKJqs1Pu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
