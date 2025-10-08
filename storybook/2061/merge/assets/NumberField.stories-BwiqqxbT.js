import{j as r}from"./iframe-7dgBHkjI.js";import{a as x,u as f,F as j,t as b}from"./Form-ChLUzjHn.js";import{L as t}from"./Label-BOtdfEdH.js";import{B as i}from"./Button-C4xC-ENb.js";import{S as y}from"./Section-BTwbdvzE.js";import{A as S}from"./ActionGroup-DgEWvKip.js";import{s as g}from"./Action-aBxNfjGZ.js";import{N as o}from"./NumberField-DxVNODlI.js";import{F as A}from"./FieldDescription-HgH3Q7pf.js";import"./index-Cun1SEai.js";import"./dynamic-3ixFNiB4.js";import"./flowComponent-BTLDR_wZ.js";import"./index-gL3AvcBv.js";import"./clsx-B-dksMZM.js";import"./index-DzRRQR_A.js";import"./FieldError-XEHbUqlq.js";import"./IconWarning-CHzLfKjq.js";import"./FieldError-DQvJzSCl.js";import"./utils-skLZq2rT.js";import"./Text-CcEbIf7j.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-ihca5feJ.js";import"./context-DLyAckLP.js";import"./browser-BYuTkZ2t.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DDrFPz8N.js";import"./Hidden-C8BM-Xlw.js";import"./Text-CPbpE1eA.js";import"./EmulatedBoldText-wnDp19Ns.js";import"./LoadingSpinner-BhdyCwx7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DA_owd3b.js";import"./ProgressBar-m_J970Ss.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C40tO5Ld.js";import"./useFocus-BVcT7Cmq.js";import"./useFocusRing-DpIlZv5r.js";import"./useFocusable-CjOl0zdL.js";import"./ContextMenuSection-P3ZBunxW.js";import"./Dialog-RmwKLDR6.js";import"./RSPContexts-DU60rLWV.js";import"./OverlayArrow-CimrvBmG.js";import"./useControlledState-U7vX1g_u.js";import"./Collection-BoyNLLEq.js";import"./CollectionBuilder-BVEyhuGf.js";import"./context-CWPPwc3G.js";import"./Separator-zM5l-9RV.js";import"./SelectionManager-CRbs3IKU.js";import"./useEvent-CJDlXvBr.js";import"./useCollator-aaYKjyL1.js";import"./FocusScope-iWt5Cohm.js";import"./VisuallyHidden-DxfkSq7z.js";import"./getActionGroupSlot-p5Itb_hd.js";import"./useStatic-BofYKATW.js";import"./context-CM0pxKNs.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-IHuL5Gc3.js";import"./Form-emkFOLws.js";import"./Group-Bn60iEKX.js";import"./Input-pFk5V5wL.js";import"./useFormValidation-lhUbjjow.js";import"./useSpinButton-CH8zCm5Q.js";import"./useFormReset-DcXBOsyZ.js";import"./useTextField-B_VR62Ms.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const Ir=["Default","WithFocusAndError"];export{s as Default,n as WithFocusAndError,Ir as __namedExportsOrder,wr as default};
