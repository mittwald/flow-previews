import{j as r}from"./iframe-DW8JgK09.js";import{a as c,u as l,F as d,t as b}from"./Form-CbwLg-A7.js";import{L as h}from"./Label-DSYT14js.js";import{B as t}from"./Button-DVfVMpGI.js";import{S as y}from"./Section-BDXmkbnW.js";import{A as B}from"./ActionGroup-DxaPJSWg.js";import{s as x}from"./Action-CbSL4lf7.js";import{F as f}from"./FileField-MEV4IrHb.js";import"./index-Cun1SEai.js";import"./dynamic-B0cR68qH.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./clsx-B-dksMZM.js";import"./index-7zpoyBXT.js";import"./FieldError-DC6xH_3a.js";import"./IconWarning-Bj3cOyEj.js";import"./FieldError-D4VyS34i.js";import"./utils-qQbsMKok.js";import"./Text-Dj-iJoJL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./context-MVg0njeL.js";import"./browser-Ddqyq5_4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./Text-DqrSOA-D.js";import"./EmulatedBoldText-C-FDCcHS.js";import"./LoadingSpinner-3AaEPCkk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B7FVzAyg.js";import"./ProgressBar-CK1_umDo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Gti5y3pG.js";import"./useFocus-BeoGO6Gw.js";import"./useFocusRing-GKfEZ5du.js";import"./useFocusable-ClSVLyWP.js";import"./ContextMenuSection-CcJ6gQBU.js";import"./Dialog-Ch87mkCh.js";import"./RSPContexts-DSsYPi0N.js";import"./OverlayArrow-Cbixw9Yo.js";import"./useControlledState-BE2AOUIF.js";import"./Collection-C1Fkd8Xr.js";import"./CollectionBuilder-CBDSTuoJ.js";import"./SelectionIndicator-CLj4WkbT.js";import"./Separator-CkUHVVyK.js";import"./SelectionManager-BpH8C0of.js";import"./useEvent-DPuiGjqT.js";import"./useCollator-JcvJSriM.js";import"./FocusScope-BFAEdpe6.js";import"./VisuallyHidden-Da3g07dP.js";import"./getActionGroupSlot-GOPGQ3I0.js";import"./useStatic-Dd3Fa8_Q.js";import"./context-BXN8qI2U.js";import"./FormField.module-CqWyJNQI.js";import"./useFormValidation-BJNwWy_2.js";import"./Input-Dnb568Ti.js";import"./useMakeFocusable-C5ORXLqM.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,_=g("submit"),Lr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const o=async S=>{await x(5e3),_(S)},F=l({defaultValues:{user:""}}),j=b();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(y,{children:[r.jsx(j,{name:"user",children:r.jsxs(f,{children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(B,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},e={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(f,{multiple:!0,children:[r.jsx(h,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};var m,n,s;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var p,a,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
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
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(u=(a=i.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const qr=["Default","WithFocusAndError"];export{e as Default,i as WithFocusAndError,qr as __namedExportsOrder,Lr as default};
