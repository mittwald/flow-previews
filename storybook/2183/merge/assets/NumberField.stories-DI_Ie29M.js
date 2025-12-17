import{j as r,r as x}from"./iframe-CuoLN6Ak.js";import{u as a,F as l}from"./Form-CSUkBA4d.js";import{L as o}from"./Label-CaF-n4li.js";import{B as u}from"./Button-Cfn_KBZi.js";import{S as j}from"./Section-DpKeH7t9.js";import{A as g}from"./ActionGroup-BQouqhs8.js";import{s as p}from"./Action-BkuSI1AI.js";import{N as t}from"./NumberField-CouW-8Xu.js";import{F as b}from"./FieldDescription-B83QXWUS.js";import{F as E}from"./FieldError-BXdT0ENq.js";import{F as d,t as S}from"./Field-Bn8O-tEJ.js";import{R as c}from"./ResetButton-CuwicxmT.js";import{S as f}from"./SubmitButton-DikI2hGX.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-t1e5k5Lt.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-YDIBuGER.js";import"./index-BqbRGCsY.js";import"./index-BaIyL5kt.js";import"./useLocalizedStringFormatter-K1ERg2wQ.js";import"./context-DM2sT4iG.js";import"./Label-D3KIvHQC.js";import"./utils-C2NHa3pd.js";import"./Hidden-DgR9vk0-.js";import"./IconApp-BDJ8KTSO.js";import"./remote-JKpMdsKf.js";import"./IconX-K8aTyunn.js";import"./IconCheck-BanT3gYA.js";import"./Text-DdChUKUI.js";import"./EmulatedBoldText-BNHG0Gfg.js";import"./Text-C8IviCt6.js";import"./LoadingSpinner-Brt5LhyU.js";import"./ariaLive-oD__tGeT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D6bHbdkl.js";import"./ProgressBar-DQXQN5uc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BM4FNoAK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIMCLJey.js";import"./useFocus-unZl_nfX.js";import"./useFocusRing-DRMfEjpH.js";import"./useFocusable-DB5_4vgf.js";import"./ContextMenuSection-BtjuRqVn.js";import"./lib-90ocxLs-.js";import"./Dialog-B3wLnKHY.js";import"./RSPContexts-B8ycOlyZ.js";import"./OverlayArrow-C99iKRaY.js";import"./useControlledState-ItXXMvHS.js";import"./Collection-But3F955.js";import"./CollectionBuilder-C3oybePu.js";import"./SelectionIndicator-BHxJDckt.js";import"./Separator-DgdmOsv7.js";import"./SelectionManager-DmuXrxNs.js";import"./useEvent-CGtQDWm6.js";import"./useCollator-C-FMw8vz.js";import"./FocusScope-Bhi-HXNo.js";import"./VisuallyHidden-CBSg7tA6.js";import"./dynamic-8E81vrw4.js";import"./getActionGroupSlot-w80GylpO.js";import"./useStatic-DF3kEdZS.js";import"./context-Cxg_dyF2.js";import"./useFieldComponent-CpAAuxDf.js";import"./IconChevronDown-4snbGUoC.js";import"./IconChevronUp-BvdxLkuM.js";import"./IconMinus-BCb9Sxkp.js";import"./IconPlus-KR3tLT6u.js";import"./useControlledHostValueProps-BqZEo0r9.js";import"./FieldError-zdBOb0_m.js";import"./Form-BoKLrbzS.js";import"./Group-y2y6-45-.js";import"./Input-CSQeI68y.js";import"./useFormValidation-BeXwm1Ez.js";import"./useSpinButton-BkARdxK_.js";import"./useFormReset-Cj_2aRsw.js";import"./useTextField-DuTAd_dm.js";import"./IconDanger-CxUQbc1u.js";import"./useRef-Qg3Ql4nX.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Xr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await p(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=S();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
