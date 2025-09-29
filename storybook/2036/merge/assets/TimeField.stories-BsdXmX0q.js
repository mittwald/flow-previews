import{j as r}from"./iframe-skRbRPoL.js";import{a as h,u as x,F as f,t as S}from"./Form-Bp5psqD5.js";import{L as i}from"./Label-Cq3I2A96.js";import{B as m}from"./Button-Dz0DuBiT.js";import{S as T}from"./Section-DOyYK0OC.js";import{A as g}from"./ActionGroup-DcKdxNCn.js";import{s as j}from"./Action-BwiD4nix.js";import{M as y}from"./DateField-S5BDIsJU.js";import{T as s}from"./TimeField-Ds5JcoNr.js";import"./index-Cun1SEai.js";import"./dynamic-CBZdW0rY.js";import"./PropsContextProvider-D-E9sUQW.js";import"./mergeRefs-BKTGVx17.js";import"./index-CXI9rWZp.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bawolgzq.js";import"./IconWarning-DXpZ8EkD.js";import"./FieldError-CQn8D9rY.js";import"./utils-BGdTTFGe.js";import"./Text-CUtREENU.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CwRDR58d.js";import"./context-BDj_8DgP.js";import"./browser-5dwj1raN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-BZeHbbby.js";import"./Hidden-CDt-bii7.js";import"./Text-CrBUObvU.js";import"./EmulatedBoldText-bw_ADscr.js";import"./LoadingSpinner-DNyrAbcW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BwtVAxMD.js";import"./ProgressBar-OmNCHxSP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEGjP4QC.js";import"./useFocus-CV5tS3zW.js";import"./useFocusRing-DlSXTuap.js";import"./useFocusable-CCkYWWjg.js";import"./ContextMenuSection-Bs_nt5W1.js";import"./Popover-DZXUsAhj.js";import"./DialogTriggerView-CvcPrbY8.js";import"./context-BgdpZ9Nh.js";import"./useStatic-DAiG3iJH.js";import"./RSPContexts-x0Tynp33.js";import"./ClearPropsContextView-mAWKRp53.js";import"./useControlledState-D1OKWRDf.js";import"./FocusScope-CC4fXxOZ.js";import"./useCollator-KwZeuNwe.js";import"./VisuallyHidden-BpSio_rc.js";import"./Collection-CRLgXtsT.js";import"./CollectionBuilder-wU1sry9x.js";import"./context-Bs3ecAZ9.js";import"./Separator-CtW8b_yz.js";import"./SelectionManager-B23tCYpi.js";import"./useEvent-C3cKfFZ7.js";import"./Switch-B4JasYcK.js";import"./useMakeFocusable-Vdb5-otp.js";import"./useToggleState-CGi4neW0.js";import"./useFormReset-i0yRktMd.js";import"./getActionGroupSlot-DYUIykqS.js";import"./Form-B2_iaNmT.js";import"./Group-BpjaHcFI.js";import"./Input-B5CQfP72.js";import"./useFormValidation-C1IjZLpu.js";import"./useSpinButton-BbQmJ8MJ.js";import"./useFilter-C_rLuQ2H.js";import"./FormField.module-CqWyJNQI.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Wr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Wr as __namedExportsOrder,Mr as default};
