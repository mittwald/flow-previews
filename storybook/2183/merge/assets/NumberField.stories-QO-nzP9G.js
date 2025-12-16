import{j as r,r as x}from"./iframe-C0Xzz6Xl.js";import{u as a,F as l}from"./Form-BfgXYtPL.js";import{L as o}from"./Label-B2dU-Foq.js";import{F as d,t as j}from"./Field-DTxkV_LC.js";import{B as u}from"./Button-D6SK2KLv.js";import{S as g}from"./Section-5zw9Z7q2.js";import{A as b}from"./ActionGroup-C9tEr64z.js";import{s as p}from"./Action-BlB31QBr.js";import{N as t}from"./NumberField-DBvjY_cf.js";import{F as E}from"./FieldDescription-C_2F70ew.js";import{F as S}from"./FieldError-COJQpxO2.js";import{R as c}from"./ResetButton-3SEBVdnD.js";import{S as f}from"./SubmitButton-BPi9gjAx.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-GRuvXKoj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ds2Zpckn.js";import"./index-BvD-rn0f.js";import"./index-BkQRYDSQ.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./context-D7OeR9su.js";import"./Label-CKDZcwiZ.js";import"./utils-DFqauJju.js";import"./Hidden-C5gaELfT.js";import"./dynamic-B_nxzmOn.js";import"./IconChevronDown-CArgk7t7.js";import"./remote-Dsm2RjO6.js";import"./IconX-CHnO5RjF.js";import"./IconCheck-ScVw6CHm.js";import"./Text-BUGgmeAk.js";import"./EmulatedBoldText-Bu7fFWiW.js";import"./Text-DHURGNQD.js";import"./LoadingSpinner-BQ76BTg3.js";import"./ariaLive-QI1POo56.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-6QRSCQME.js";import"./ProgressBar-CO9uG_4l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Zu9XfwEA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5FukuHow.js";import"./useFocus-B1cKxXv-.js";import"./useFocusRing-Bftxxd_V.js";import"./useFocusable-RbNM5_qn.js";import"./ContextMenuSection-CuOhHuwr.js";import"./lib-90ocxLs-.js";import"./Dialog-DXKvHJZX.js";import"./RSPContexts-xpSy9BW_.js";import"./OverlayArrow-CpBfJzRQ.js";import"./useControlledState-DnOVZzTA.js";import"./Collection-BflGVmPS.js";import"./CollectionBuilder-D_O-sn_C.js";import"./SelectionIndicator-C8D-p8dY.js";import"./Separator-D5lpfI0l.js";import"./SelectionManager-B3HFpuo-.js";import"./useEvent-CecaYo_j.js";import"./useCollator-BDv8d74S.js";import"./FocusScope-ClGhoguJ.js";import"./VisuallyHidden-DF-QcwIB.js";import"./getActionGroupSlot-BcOhbfZF.js";import"./useStatic-BdnZkR9g.js";import"./context-Cc_BWEb7.js";import"./useFieldComponent-BRIXb0CQ.js";import"./IconChevronUp-C4s99yMu.js";import"./IconMinus-Div5x6T_.js";import"./IconPlus-DW1Ic8IP.js";import"./useControlledHostValueProps-BeTsIibq.js";import"./FieldError-D1TN1uH_.js";import"./Form-DJAYx_sb.js";import"./Group-BpFeMFVu.js";import"./Input-rZfax9iy.js";import"./useFormValidation-D4H7vgpB.js";import"./useSpinButton-BBfBy3uv.js";import"./useFormReset-BXb8b3rI.js";import"./useTextField-Cj_XPZw1.js";import"./IconDanger-Dkbk0FFN.js";import"./useRef-BKT5_v6o.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await p(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
