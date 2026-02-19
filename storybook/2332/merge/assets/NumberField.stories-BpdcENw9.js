import{r as x,j as r}from"./iframe-CDsKaBRg.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-BwL6hTeN.js";import{L as o}from"./Label-D5EyKl2G.js";import{B as u}from"./Button-DrVGXfuQ.js";import{S as g}from"./Section-COUCeP8U.js";import{A as b}from"./ActionGroup-DpRNak7X.js";import{s as p}from"./ActionBatch-Jyp25YdZ.js";import{N as t}from"./NumberField-nqgef3b9.js";import{F as E}from"./FieldDescription-CzKLx4Mc.js";import{F as S}from"./FieldError-CR7kl2wA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtOpUuGK.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./clsx-B-dksMZM.js";import"./index-RjKRi-BV.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./context-BPMj9VV_.js";import"./ActionGroupView-CPb_RrYj.js";import"./Content-hDAUdQXl.js";import"./Heading-DaIr1sLA.js";import"./Heading-CTLIsxjY.js";import"./RSPContexts-B8A9jPpa.js";import"./utils-D_LVRUjq.js";import"./Text-BC05_GH2.js";import"./browser-CeRuCCb_.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./Modal-BKmcb3Jp.js";import"./useOverlayController-B7-u35xe.js";import"./useStatic-B_kqalTp.js";import"./Overlay-DJH25hP-.js";import"./OverlayContextProvider-C6_d12zo.js";import"./LoadingSpinner-COR3vr_l.js";import"./IconWarning-BO7Rp0Xm.js";import"./remote-CceIEVln.js";import"./Dialog-C4SGct0D.js";import"./Button-BshsCdLp.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dan0bPtD.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useFocusable-C6i2fSTk.js";import"./OverlayArrow-DUsbU_k4.js";import"./useControlledState-daUq4f0n.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./VisuallyHidden-BzY4kZPn.js";import"./ButtonView-DkT0_tka.js";import"./Flex-C5S7EQFf.js";import"./useRef-CetA4uZk.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BtR3HXLs.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./useFieldComponent-CC8SHRwT.js";import"./useControlledHostValueProps-9pbYA7lC.js";import"./FieldError-CoNTUoG6.js";import"./Form-CsNQY4H6.js";import"./Group-B8kqqSOi.js";import"./Input-BDN5Bs6G.js";import"./useFormValidation-B4cT2hyf.js";import"./useSpinButton-BVhaAt5z.js";import"./useFormReset-CxPQXG_K.js";import"./useTextField-C1uNYa88.js";import"./AlertText-BdJT91v6.js";import"./AlertIcon-BRHbbzl7.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
