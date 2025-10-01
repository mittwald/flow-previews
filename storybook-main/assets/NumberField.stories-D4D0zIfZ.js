import{j as r}from"./iframe-BA6fDn45.js";import{a as x,u as f,F as j,t as b}from"./Form-BwCYqKcw.js";import{L as t}from"./Label-12Swj0ll.js";import{B as i}from"./Button-CMSL1MHe.js";import{S as y}from"./Section-BxQ4KpXF.js";import{A as S}from"./ActionGroup-BWtgkqY9.js";import{s as g}from"./Action-CxZ_aWnU.js";import{N as o}from"./NumberField-CTITLByQ.js";import{F as A}from"./FieldDescription-Cm7kZs03.js";import"./index-Cun1SEai.js";import"./dynamic-B5xcbnuy.js";import"./flowComponent-DAuYRjCP.js";import"./index-DovfTAQ1.js";import"./clsx-B-dksMZM.js";import"./index-DorRoXow.js";import"./FieldError-C4B-9J1n.js";import"./IconWarning-RvG5V2Gg.js";import"./FieldError-DSSHPUap.js";import"./utils-B0PKDg6J.js";import"./Text-BlF9rzJU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CoI3i-Zj.js";import"./context-D6O0cSe8.js";import"./browser-BAFOwcQV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CM7Rtudl.js";import"./Hidden-BWmE1vDO.js";import"./Text-BB_jWM0A.js";import"./EmulatedBoldText-Dom6ilWt.js";import"./LoadingSpinner-Dgd8j7jz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DSXpZTIL.js";import"./ProgressBar-BfpmuxQQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BQkI-aJ9.js";import"./useFocus-DSzhmy1b.js";import"./useFocusRing-BRVUU_95.js";import"./useFocusable-20QGmjfJ.js";import"./ContextMenuSection-BgHMRQz7.js";import"./Dialog-CYKhgjuk.js";import"./RSPContexts-BrsSHeal.js";import"./OverlayArrow-DBwRAJ-a.js";import"./useControlledState-DgfMlGIn.js";import"./Collection-D4YkJ3N5.js";import"./CollectionBuilder-CyubYm4y.js";import"./context-DwuzVRtg.js";import"./Separator-CFMHi57C.js";import"./SelectionManager-DMXqcscO.js";import"./useEvent-D6ZMwboe.js";import"./useCollator-ynWs3FsB.js";import"./FocusScope-B1mU0Ypz.js";import"./VisuallyHidden-D1tpk_Z3.js";import"./getActionGroupSlot-DOaaGACl.js";import"./useStatic-Dc3NgXvq.js";import"./context-aU6YV9zZ.js";import"./FormField.module-CqWyJNQI.js";import"./ReactAriaControlledValueFix-BuCZ9tyO.js";import"./Form-BO5siFlo.js";import"./Group-Bspax4i2.js";import"./Input-DxM6bhLy.js";import"./useFormValidation-Da1DrGKi.js";import"./useSpinButton-3ndxw-ZI.js";import"./useFormReset-DffYIxF4.js";import"./useTextField-CKMYuI1w.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),wr={title:"Integrations/React Hook Form/NumberField",component:x,render:()=>{const e=async F=>{await g(1500),_(F)},p=f({defaultValues:{ageDefaultValue:36}}),m=b();return r.jsx(j,{form:p,onSubmit:e,children:r.jsxs(y,{children:[r.jsx(m,{name:"age",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx(m,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(o,{minValue:18,children:[r.jsx(t,{children:"Age"}),r.jsx(A,{children:"You have to be at least 18 years old"})]})}),r.jsxs(S,{children:[r.jsx(i,{onPress:()=>p.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:()=>{const e=f();return r.jsxs(j,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsx(o,{children:r.jsx(t,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var a,u,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var c,d,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
