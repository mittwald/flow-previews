import{j as r}from"./iframe-F0_qnNmG.js";import{a as c,u as d,F as l,t as b}from"./Form-CFfDByC-.js";import{L as h}from"./Label-BW-f-a9z.js";import{B as i}from"./Button-6GY0aJmr.js";import{S as g}from"./Section-B3WAbWpL.js";import{A as y}from"./ActionGroup-BwHQ3W2X.js";import{s as x}from"./Action-rcgaEMhe.js";import{S as f}from"./SearchField-DhHU4fqO.js";import"./index-Cun1SEai.js";import"./dynamic-Bv8wQ4eA.js";import"./flowComponent-GddMka9Q.js";import"./index-D9xEo-AP.js";import"./clsx-B-dksMZM.js";import"./index-Bz7U0goG.js";import"./FieldError-Cez4hVsO.js";import"./IconWarning-uipPPHio.js";import"./FieldError-Ba7AQt9l.js";import"./utils-sDrdBfYO.js";import"./Text-aPdZ_B4g.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-DWKCNeCS.js";import"./context-BBFKgyN5.js";import"./browser-Cnb-FwPQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-D-2NVJQc.js";import"./Hidden-D_DlAV2X.js";import"./Text-DO7iLNcc.js";import"./EmulatedBoldText-nQ9KrBk1.js";import"./LoadingSpinner-Ct4VP7lS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-vo1xOT6L.js";import"./ProgressBar-BhbNzFL_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0DSh--k.js";import"./useFocus-DXNQJCU_.js";import"./useFocusRing-DNaFw-NR.js";import"./useFocusable-ueFnB-zi.js";import"./ContextMenuSection-CVTYXQHy.js";import"./Dialog-DaSdBBae.js";import"./RSPContexts-B8tkrJ5_.js";import"./OverlayArrow-DJ_OxNNs.js";import"./useControlledState-DnVXKiKM.js";import"./Collection-Bb4E4fO1.js";import"./CollectionBuilder-BnV_Tl8t.js";import"./context-DsS8yj4W.js";import"./Separator-CDhUdR2K.js";import"./SelectionManager-BSSRyZsY.js";import"./useEvent-CBSm4e4D.js";import"./useCollator-CNod_Fl3.js";import"./FocusScope-BnokTE9A.js";import"./VisuallyHidden-BlAFGTlT.js";import"./getActionGroupSlot-C4q-hMJK.js";import"./useStatic-B-ONLx4H.js";import"./context-BzKhkjPO.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-CEDZYJ47.js";import"./Form-Ca0x7b6g.js";import"./Group-z3D8wTQE.js";import"./Input-DMy6iJHZ.js";import"./useTextField-CkA_A7v3.js";import"./useFormReset-yESpD6TP.js";import"./useFormValidation-CO-DTcJJ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),Dr={title:"Integrations/React Hook Form/SearchField",component:c,render:()=>{const t=async j=>{await x(5e3),_(j)},F=d({defaultValues:{user:""}}),S=b();return r.jsx(l,{form:F,onSubmit:t,children:r.jsxs(g,{children:[r.jsx(S,{name:"user",children:r.jsx(f,{children:r.jsx(h,{children:"Suche"})})}),r.jsx(y,{children:r.jsx(i,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=d();return r.jsxs(l,{form:t,onSubmit:async()=>await x(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsx(f,{children:r.jsx(h,{children:"Role"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var m,s,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <SearchField>
            <Label>Role</Label>
          </SearchField>
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
}`,...(u=(a=e.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const vr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,vr as __namedExportsOrder,Dr as default};
