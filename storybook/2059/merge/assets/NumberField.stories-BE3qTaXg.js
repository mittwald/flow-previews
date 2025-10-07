import{j as r}from"./iframe-4Q3VdU3W.js";import{a as x,u as f,F as j,t as b}from"./Form-D0cPrVSZ.js";import{L as t}from"./Label-UJpqKaML.js";import{B as i}from"./Button-DtfrCWpg.js";import{S as y}from"./Section-BCaeDUwn.js";import{A as S}from"./ActionGroup-CDfjIgIF.js";import{s as g}from"./Action-BPLFS_xS.js";import{N as o}from"./NumberField-BerxREo4.js";import{F as A}from"./FieldDescription-DUJAoqDX.js";import"./index-Cun1SEai.js";import"./dynamic-D7Z9JYdX.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./clsx-B-dksMZM.js";import"./index-PS7XpSls.js";import"./FieldError-BQ2VN50e.js";import"./IconWarning-C7969b2c.js";import"./FieldError-Bmwt53NP.js";import"./utils-BDqSegOF.js";import"./Text-CbQs5VbJ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./context-Ctn7vzaA.js";import"./browser-BefUj7Q1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./Text-Dj8BftP4.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./LoadingSpinner-DB05D1_y.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CVw6sY0j.js";import"./ProgressBar-DDVhQ4Au.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./ContextMenuSection-DHdrwNVp.js";import"./Dialog-eTJli1DK.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./getActionGroupSlot-DbevwPeS.js";import"./useStatic-J4yhNwyX.js";import"./context-HST9WQNh.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-zYXL9adS.js";import"./Form-CQ3IrCNT.js";import"./Group-CjafXOCg.js";import"./Input-5I3vFHmb.js";import"./useFormValidation-QKBec53c.js";import"./useSpinButton-DpHf6MAv.js";import"./useFormReset-DJaP_Vl0.js";import"./useTextField-BtsO4jRS.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
