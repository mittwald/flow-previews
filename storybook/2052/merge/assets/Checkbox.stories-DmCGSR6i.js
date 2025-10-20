import{j as r,r as g}from"./iframe-CuPb25cv.js";import{a as p,u as a,F as u,t as A}from"./Form-D3dPEjiA.js";import{B as n}from"./Button-Cy_FSVpl.js";import{S as B}from"./Section-B55_57D7.js";import{A as C}from"./ActionGroup-BCzfYI9o.js";import{s as d}from"./Action-CE7P3CGA.js";import{C as o}from"./Checkbox-CCOr9rzS.js";import{F as k}from"./useFieldComponent-D7Smil9s.js";import"./index-Cun1SEai.js";import"./flowComponent-7fMtXNgu.js";import"./index-CslL-pQh.js";import"./clsx-B-dksMZM.js";import"./index-DkEiVX-f.js";import"./Text-2_ekHeae.js";import"./browser-1QXSrBs6.js";import"./EmulatedBoldText-aijrrTX2.js";import"./Text-DqFBqxgU.js";import"./utils-rjde634_.js";import"./useLocalizedStringFormatter-C6GTeGHr.js";import"./context-Cf_eXnNJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CLSl9yKt.js";import"./LoadingSpinner-BlCTpLFY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DVhMN4v1.js";import"./ProgressBar-CiugOVQS.js";import"./Label-B7k3ity1.js";import"./Hidden-CG2yJe_k.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BpP9sX_8.js";import"./useFocus-Cts5O1ED.js";import"./useFocusRing-rCVkEzcT.js";import"./useFocusable-CMpHMgWZ.js";import"./ContextMenuSection-D_Ue6SpG.js";import"./Dialog-CfTpgVgc.js";import"./RSPContexts-xO1N3or9.js";import"./OverlayArrow-iWeFoukr.js";import"./useControlledState-zpPREGnC.js";import"./Collection-CNWEIWZq.js";import"./CollectionBuilder-Dw6bvv_r.js";import"./SelectionIndicator-H-x2PvD-.js";import"./Separator-DV0TabKR.js";import"./SelectionManager-mI79mw48.js";import"./useEvent-BuJ7ERaN.js";import"./useCollator-D4PCkYMI.js";import"./FocusScope-Dlp3dq5q.js";import"./VisuallyHidden-CoDyqh9l.js";import"./dynamic-CGQ0FoZ_.js";import"./getActionGroupSlot-DZJjgnxC.js";import"./useStatic-BfPJwRSw.js";import"./context-B692btnM.js";import"./Form-BCVzxl1k.js";import"./useFormValidation-DUD5vlRz.js";import"./useToggleState-B9BoubUu.js";import"./useFormReset-Cj0hiSlt.js";import"./react-children-utilities-OY5o0O78.js";import"./ClearPropsContext-1rzIpp4D.js";const{action:O}=__STORYBOOK_MODULE_ACTIONS__,T=O("submit"),Rr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const t=async y=>{await d(1500),T(y)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),c=A();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(c,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(c,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(c,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(C,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};var l,f,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,F,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...(j=(F=m.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var b,E,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const vr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,vr as __namedExportsOrder,Rr as default};
