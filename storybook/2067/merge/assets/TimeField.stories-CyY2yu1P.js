import{j as r}from"./iframe-Dyev7uqQ.js";import{a as h,u as x,F as f,t as S}from"./Form-Gu8_mx9R.js";import{L as i}from"./Label-DTUVPi2K.js";import{B as m}from"./Button-M1gfFqsi.js";import{S as T}from"./Section-BfDLZAnd.js";import{A as g}from"./ActionGroup-Cif2aV44.js";import{s as j}from"./Action-B4ax4ap7.js";import{M as y}from"./DateField-C6tIm5Wv.js";import{T as s}from"./TimeField-CADKjPJw.js";import"./index-Cun1SEai.js";import"./dynamic-BE-yoA5C.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./clsx-B-dksMZM.js";import"./index-CvZL7rFv.js";import"./FieldError-BvGSOrPS.js";import"./IconWarning-Bsmw3ttA.js";import"./FieldError-Nbp5sqjA.js";import"./utils-xAJ0Toj9.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./browser-ChaPEiup.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./Text-DCNvFKD8.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./useStatic-Bud3ojrW.js";import"./context-C27PnH24.js";import"./Form-DM5JENEN.js";import"./Group-Bx2wIJZm.js";import"./Input-D9REckIy.js";import"./useFormValidation-BpwVeG4s.js";import"./useFormReset-CiUCuSgO.js";import"./useSpinButton-BzwWnvlc.js";import"./useFilter-ChtLyPYA.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C9hlV0WZ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
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
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const vr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,vr as __namedExportsOrder,$r as default};
