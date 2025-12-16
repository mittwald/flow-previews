import{j as r,r as x}from"./iframe-jqgUclr4.js";import{u as a,F as l}from"./Form-Dc6zdHeZ.js";import{L as o}from"./Label-B_zOvN70.js";import{F as p,t as j}from"./Field-WmeAWjEG.js";import{B as u}from"./Button-Df2EGOwf.js";import{S as g}from"./Section-7B4EPCtc.js";import{A as b}from"./ActionGroup-B2OhWuHy.js";import{s as d}from"./Action-DzpPHaH9.js";import{N as t}from"./NumberField-sxReJ5mQ.js";import{F as E}from"./FieldDescription-BpCIxkVt.js";import{F as S}from"./FieldError-C5F3bfgz.js";import{R as c}from"./ResetButton-Bv__d16Z.js";import{S as f}from"./SubmitButton-D312ZINB.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-EX5vhkWE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./index-KptOOerd.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./context-BwRvgyRH.js";import"./Label-BRPoLfQP.js";import"./utils-5IALZqjS.js";import"./Hidden-DkAwJJ8c.js";import"./dynamic-CApc5zUm.js";import"./IconApp-B0Y2ZEG7.js";import"./remote-7w2FpeEf.js";import"./IconX-BapyfuEN.js";import"./IconCheck-BSwcfujb.js";import"./Text-B-prTEID.js";import"./EmulatedBoldText-B9oQd6gk.js";import"./Text-tTF8cKGK.js";import"./LoadingSpinner-CE8K3mv7.js";import"./ariaLive-DpfDdvhx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXhO4gzH.js";import"./ProgressBar-BcVh39-H.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cr6qu-mQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYHfZHyQ.js";import"./useFocus-FM6ro1uR.js";import"./useFocusRing-C1ZjOk7y.js";import"./useFocusable-Zu3bG2Sq.js";import"./ContextMenuSection-0hv9Ce60.js";import"./lib-90ocxLs-.js";import"./Dialog-MLUvkWk2.js";import"./RSPContexts-BB1SZI7P.js";import"./OverlayArrow-ERqZtQI-.js";import"./useControlledState-Cu6J25_e.js";import"./Collection-Com2yYnM.js";import"./CollectionBuilder-GNx_dNeS.js";import"./SelectionIndicator-BFlPMkh7.js";import"./Separator-BmEyAoWP.js";import"./SelectionManager-Bd2Xd50m.js";import"./useEvent-DIea5lRE.js";import"./useCollator-B9XYqGj0.js";import"./FocusScope-CJmxo3uG.js";import"./VisuallyHidden-CdTYKgUx.js";import"./getActionGroupSlot-C1ZLvjFs.js";import"./useStatic-Hn0frKun.js";import"./context-BZOmdfdu.js";import"./useFieldComponent-C0Pt2yH0.js";import"./IconChevronDown-B9Uj9rRW.js";import"./IconChevronUp--xXx7H3_.js";import"./IconMinus-B0I6QV1Y.js";import"./IconPlus-_L-EdiBf.js";import"./useControlledHostValueProps-BbYne8gB.js";import"./FieldError-DSvmLOVG.js";import"./Form-BMNY4Kb2.js";import"./Group-N_eJQU5l.js";import"./Input-Dn37EEpO.js";import"./useFormValidation-BWQF9tl0.js";import"./useSpinButton-2ePtc_EQ.js";import"./useFormReset-BuHZrSbJ.js";import"./useTextField-BDtQfqtc.js";import"./IconDanger-BMQW6rjZ.js";import"./useRef-N6H0Txdu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Xr={title:"Integrations/React Hook Form/NumberField",component:p,render:()=>{const e=async F=>{await d(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Zr as __namedExportsOrder,Xr as default};
