import{j as r,r as x}from"./iframe-ChZoSAk9.js";import{u as a,F as l}from"./Form-0HSZJT_W.js";import{L as o}from"./Label-BtQBKk3e.js";import{F as p,t as j}from"./Field-Dene1CiM.js";import{B as u}from"./Button-igkSssls.js";import{S as g}from"./Section-aVFZU63j.js";import{A as b}from"./ActionGroup-BqXbSba3.js";import{s as d}from"./Action-CVNqq51W.js";import{N as t}from"./NumberField-BL_WH8Yd.js";import{F as E}from"./FieldDescription-C8pMBaks.js";import{F as S}from"./FieldError-D0FcbU4f.js";import{R as c}from"./ResetButton-D8t4HRTr.js";import{S as f}from"./SubmitButton-2qWtJAAu.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B8p5n3S3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Label-8-s2XGsR.js";import"./utils-3orXHcy8.js";import"./Hidden-BToicrtl.js";import"./dynamic-D_MCnPMN.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./Text-DeId_uwd.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAWw_35t.js";import"./ProgressBar-Bd4jHgjB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./ContextMenuSection-b1V79oDp.js";import"./lib-90ocxLs-.js";import"./Dialog-B1ggtFGC.js";import"./RSPContexts-BuIIeKa7.js";import"./OverlayArrow-BwEdTwQI.js";import"./useControlledState-CXwLHBKW.js";import"./Collection-CxsVz65g.js";import"./CollectionBuilder-Dc1RsPXG.js";import"./SelectionIndicator-BZmDBgq9.js";import"./Separator-h8DcfgTk.js";import"./SelectionManager-B2umJv1d.js";import"./useEvent-D5qx-uIw.js";import"./useCollator-DVwfKBY9.js";import"./FocusScope-DTg-yLmD.js";import"./VisuallyHidden-TRsVH-0B.js";import"./getActionGroupSlot-D9Q9Xlmq.js";import"./useStatic-YkfQLHoK.js";import"./context-DK_eOJFA.js";import"./useFieldComponent-CTbZHLtq.js";import"./IconChevronDown-CJhDZ6B_.js";import"./IconChevronUp-Mzb7Z-19.js";import"./IconMinus-Bd-huTvL.js";import"./IconPlus-BIH__R1o.js";import"./useControlledHostValueProps-COJ6lWMZ.js";import"./FieldError-krJUZi9_.js";import"./Form-DiR4hcFZ.js";import"./Group-BO5rtvFF.js";import"./Input-C1UIQQj8.js";import"./useFormValidation-DrPCugNK.js";import"./useSpinButton-BQexWXlG.js";import"./useFormReset-DlW87ulD.js";import"./useTextField-BJpggVQl.js";import"./IconDanger-bNuP_yaN.js";import"./useRef-ChzQuoTx.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Xr={title:"Integrations/React Hook Form/NumberField",component:p,render:()=>{const e=async F=>{await d(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
