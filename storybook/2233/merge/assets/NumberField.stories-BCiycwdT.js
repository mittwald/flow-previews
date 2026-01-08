import{j as r,r as x}from"./iframe-BMquwUxp.js";import{b as a,u as l,F as d,t as j}from"./Form-CH4Jd3Vi.js";import{L as o}from"./Label-RP2jfdXb.js";import{R as c,S as f}from"./ResetButton-BmqhXreY.js";import{B as p}from"./Button-DvE0An6z.js";import{S as b}from"./Section-Cjc_LDxh.js";import{A as g}from"./ActionGroup-CFM0ipne.js";import{s as u}from"./Action-4VgG125V.js";import{N as t}from"./NumberField-t043BBQz.js";import{F as E}from"./FieldDescription-CjEOnvYA.js";import{F as S}from"./FieldError-DmIKwRtH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3tImXr.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./context-BcuHL9mG.js";import"./browser-CBlt42Oy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BA-uOG5q.js";import"./utils-C54becjs.js";import"./Hidden-DXpev5BT.js";import"./useRef-DMo9v2cQ.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Text-EG4UQ_l2.js";import"./EmulatedBoldText-CntJSrfE.js";import"./Text-CPXkgTZA.js";import"./LoadingSpinner-BPW5hp_J.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CwpJPQ3S.js";import"./ProgressBar-ztA157SI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./ContextMenuSection-DHh_hwVu.js";import"./Dialog-Dx0VK2pV.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./VisuallyHidden-D31Z6xaf.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./useStatic-BMpae3_g.js";import"./context-BbITb74L.js";import"./useFieldComponent-7OMeXUSU.js";import"./useControlledHostValueProps-D7O5jAV7.js";import"./FieldError-D0s5eFn1.js";import"./Form-i5hQHr5E.js";import"./Group-CqoaeHFC.js";import"./Input-DU1QpXVG.js";import"./useFormValidation-BU69543b.js";import"./useSpinButton-B9vUrIrs.js";import"./useFormReset-DGUxmLDL.js";import"./useTextField-BJeGxBtu.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
