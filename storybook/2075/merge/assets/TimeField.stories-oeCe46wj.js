import{j as r}from"./iframe-D3XbVUAE.js";import{a as h,u as x,F as f,t as S}from"./Form-C5MCGQf3.js";import{L as i}from"./Label-BTIrFf4y.js";import{B as m}from"./Button-DI43yX0M.js";import{S as T}from"./Section-BUZrj2S6.js";import{A as g}from"./ActionGroup-F8VITapX.js";import{s as j}from"./Action-CZBfRLDN.js";import{M as y}from"./DateField-DMVJjZ2f.js";import{T as s}from"./TimeField-Dy7iAnET.js";import"./index-Cun1SEai.js";import"./dynamic-GIq4BKTG.js";import"./flowComponent-EDib50S8.js";import"./index-CK8n9fzK.js";import"./clsx-B-dksMZM.js";import"./index-BE_iNncf.js";import"./FieldError-DuGPuZu9.js";import"./IconWarning-DpoKEiS2.js";import"./FieldError-NLw4NqNk.js";import"./utils-BWY6h_sn.js";import"./Text-D1dMR7Bg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CjS_r_W_.js";import"./context-DmwBBPOa.js";import"./browser-DZQtGRWw.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DVxhCXlj.js";import"./Hidden-Cd6SNVLk.js";import"./Text-D8iCnd0a.js";import"./EmulatedBoldText-C38wPnte.js";import"./LoadingSpinner-LCrs4rVN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BiJGxu5-.js";import"./ProgressBar-BpanmrTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DzXxx4G-.js";import"./useFocus-DS8-NOtK.js";import"./useFocusRing-C2luJKmh.js";import"./useFocusable-ZL6151jY.js";import"./ContextMenuSection-CLGzRvVY.js";import"./Dialog-D6YV7AqF.js";import"./RSPContexts-BakoLx3C.js";import"./OverlayArrow-9doXs0eI.js";import"./useControlledState-Dbx7ZwrT.js";import"./Collection-C3nUBF4h.js";import"./CollectionBuilder-B_u7Wa0Q.js";import"./SelectionIndicator-Cq3hNpeI.js";import"./Separator-BCuxzefv.js";import"./SelectionManager-CUwtbCt4.js";import"./useEvent-nRU769M-.js";import"./useCollator-zmWlXBku.js";import"./FocusScope-Bgf4u7XC.js";import"./VisuallyHidden-ChWvOP_M.js";import"./getActionGroupSlot-CXPM0c0n.js";import"./useStatic-B8Xkh7jF.js";import"./context-Do4klyfP.js";import"./Form-CcsDzmFP.js";import"./Group-BPkRhbu5.js";import"./Input-CNAwbAUs.js";import"./useFormValidation-Co07oj9m.js";import"./useFormReset-BLKvBmEx.js";import"./useSpinButton-Dt02yJhU.js";import"./useFilter-DQzY3hAa.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C7JQv0_C.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
