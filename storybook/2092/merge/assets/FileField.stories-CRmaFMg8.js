import{j as r,r as F}from"./iframe-DCa_XPw0.js";import{a as l,u as a,F as c,t as h}from"./Form-BRygFy9B.js";import{L as s}from"./Label-vDm2WQu9.js";import{B as t}from"./Button-5vT2-_W4.js";import{S as x}from"./Section-DMxoBBTe.js";import{A as j}from"./ActionGroup-B0BJPAOp.js";import{s as u}from"./Action-woDk9-dG.js";import{F as m}from"./FileField-DOxgIKsE.js";import{F as S}from"./useFieldComponent-DnSwczmT.js";import"./index-nuYtCEEu.js";import"./flowComponent-CAToH-fj.js";import"./index-CMKGq9Xe.js";import"./clsx-B-dksMZM.js";import"./index-d5hFVLIP.js";import"./useLocalizedStringFormatter-DwWhxD93.js";import"./context-CFo6-Xo4.js";import"./browser-2ZL6lgPg.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DCh_0unC.js";import"./utils-CHsRUe2b.js";import"./Hidden-DqzRERrR.js";import"./IconWarning-Q2oX1eiS.js";import"./Text-DnODaVEe.js";import"./EmulatedBoldText-BxXSB0Xl.js";import"./Text-I5qgKc0V.js";import"./LoadingSpinner-Cb4DUvy2.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-8oNj6zWV.js";import"./ProgressBar-D1oSpt7t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cxr0dS9W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DoF43DDZ.js";import"./useFocus-m8lB89Ac.js";import"./useFocusRing-fwjWpFlM.js";import"./useFocusable-D6JtitxC.js";import"./ContextMenuSection-DAzc5rVw.js";import"./Dialog-jvkUQzt2.js";import"./RSPContexts-A2JzYqIb.js";import"./OverlayArrow-DWeqJ8mt.js";import"./useControlledState-CRVJv1rD.js";import"./Collection-lLJk5rmu.js";import"./CollectionBuilder-DD57-D5g.js";import"./SelectionIndicator-VK3V8vC4.js";import"./Separator-R4oBq4li.js";import"./SelectionManager-DdMpn3UJ.js";import"./useEvent-DbA6iyXo.js";import"./useCollator-KuUVGEVj.js";import"./FocusScope-D1UKu4WZ.js";import"./VisuallyHidden-D3RYJYP2.js";import"./dynamic-DrAw5ycp.js";import"./getActionGroupSlot-InsSo2J4.js";import"./useStatic-CrVdgLYB.js";import"./context-Dlf3CpRu.js";import"./useFormValidation-Dya2y-k8.js";import"./Input-Btedufej.js";import"./useMakeFocusable-BoKUk5Zb.js";import"./react-children-utilities-BnxGKhPm.js";import"./ClearPropsContext-D7TWL38i.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Cr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async f=>{await u(5e3),b(f)},d=a({defaultValues:{user:""}}),p=h();return r.jsx(c,{form:d,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(p,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(j,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,_r as __namedExportsOrder,Cr as default};
