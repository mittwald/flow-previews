import{j as r,r as h}from"./iframe-B8r8XrPb.js";import{a as l,u as d,F as u,t as F}from"./Form-DuDUSxCv.js";import{L as o}from"./Label-PmVCxAho.js";import{B as i}from"./Button-x8S8uZ_3.js";import{S as x}from"./Section-DbQ-wmnj.js";import{A as j}from"./ActionGroup-COWTQNIi.js";import{s as p}from"./Action-DHR-Mkls.js";import{N as t}from"./NumberField-CX4BRAlz.js";import{F as g}from"./FieldDescription-B6QY2e39.js";import{F as b}from"./FieldError-Cr-OeICt.js";import"./index-nuYtCEEu.js";import"./dynamic-Bnt25vOJ.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./clsx-B-dksMZM.js";import"./index-ChMccDi0.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./context-d7knuPTA.js";import"./browser-5JWtNQpe.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DhvUjtv7.js";import"./utils-B2sHMxfy.js";import"./Hidden-C0uurl-T.js";import"./IconWarning-BnpSGPSL.js";import"./Text-CxxNxEUo.js";import"./EmulatedBoldText-DH8-rljC.js";import"./Text-DsIbOJYe.js";import"./LoadingSpinner-bZO-WOXG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DOtSsu3o.js";import"./ProgressBar-9fERUQ0g.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn_yI2FK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BPC_OlSs.js";import"./useFocus-Co_XlsN_.js";import"./useFocusRing-DGaivw0f.js";import"./useFocusable-USAcjdfT.js";import"./ContextMenuSection-Cnztb-zU.js";import"./Dialog-DJ22CsqV.js";import"./RSPContexts-Do_0M-hc.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useControlledState-Dhb_P5xS.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./VisuallyHidden-DvNHrLSk.js";import"./getActionGroupSlot-BOj_bO4_.js";import"./useStatic-Qi3p0Ena.js";import"./context-tqHfsDuk.js";import"./useFieldComponent-DByhNd_z.js";import"./ClearPropsContext-BX2g1WFh.js";import"./ReactAriaControlledValueFix-PV676lWb.js";import"./Form-C0W2Agsa.js";import"./Group-DkjxT4kZ.js";import"./Input-Cyh52Hgt.js";import"./useFormValidation-DuuScCCl.js";import"./useSpinButton-xd5u1ryO.js";import"./useFormReset-Cpg0SQow.js";import"./useTextField-BBBf5j1Z.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:l,render:()=>{const e=async f=>{await p(1500),y(f)},c=d({defaultValues:{ageDefaultValue:36}}),s=F();return r.jsx(u,{form:c,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(s,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(s,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"You have to be at least 18 years old"})]})}),r.jsxs(j,{children:[r.jsx(i,{onPress:()=>c.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},n={},m={render:()=>{const e=d({defaultValues:{field:""}});return h.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:()=>{const e=d({defaultValues:{field:""}});return r.jsxs(u,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(l,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const Rr=["Default","WithFieldError","WithFocus"];export{n as Default,m as WithFieldError,a as WithFocus,Rr as __namedExportsOrder,wr as default};
