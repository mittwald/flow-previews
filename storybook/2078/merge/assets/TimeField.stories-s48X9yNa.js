import{j as r}from"./iframe-DW8JgK09.js";import{a as h,u as x,F as f,t as S}from"./Form-CbwLg-A7.js";import{L as i}from"./Label-DSYT14js.js";import{B as m}from"./Button-DVfVMpGI.js";import{S as T}from"./Section-BDXmkbnW.js";import{A as g}from"./ActionGroup-DxaPJSWg.js";import{s as j}from"./Action-CbSL4lf7.js";import{M as y}from"./DateField-BZuhvxZ9.js";import{T as s}from"./TimeField-C7QzcthG.js";import"./index-Cun1SEai.js";import"./dynamic-B0cR68qH.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./clsx-B-dksMZM.js";import"./index-7zpoyBXT.js";import"./FieldError-DC6xH_3a.js";import"./IconWarning-Bj3cOyEj.js";import"./FieldError-D4VyS34i.js";import"./utils-qQbsMKok.js";import"./Text-Dj-iJoJL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./context-MVg0njeL.js";import"./browser-Ddqyq5_4.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./Text-DqrSOA-D.js";import"./EmulatedBoldText-C-FDCcHS.js";import"./LoadingSpinner-3AaEPCkk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B7FVzAyg.js";import"./ProgressBar-CK1_umDo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Gti5y3pG.js";import"./useFocus-BeoGO6Gw.js";import"./useFocusRing-GKfEZ5du.js";import"./useFocusable-ClSVLyWP.js";import"./ContextMenuSection-CcJ6gQBU.js";import"./Dialog-Ch87mkCh.js";import"./RSPContexts-DSsYPi0N.js";import"./OverlayArrow-Cbixw9Yo.js";import"./useControlledState-BE2AOUIF.js";import"./Collection-C1Fkd8Xr.js";import"./CollectionBuilder-CBDSTuoJ.js";import"./SelectionIndicator-CLj4WkbT.js";import"./Separator-CkUHVVyK.js";import"./SelectionManager-BpH8C0of.js";import"./useEvent-DPuiGjqT.js";import"./useCollator-JcvJSriM.js";import"./FocusScope-BFAEdpe6.js";import"./VisuallyHidden-Da3g07dP.js";import"./getActionGroupSlot-GOPGQ3I0.js";import"./useStatic-Dd3Fa8_Q.js";import"./context-BXN8qI2U.js";import"./Form-DQnvx-Rv.js";import"./Group-BO-d7acf.js";import"./Input-Dnb568Ti.js";import"./useFormValidation-BJNwWy_2.js";import"./useFormReset-DWeezvOC.js";import"./useSpinButton-C-qjz8xS.js";import"./useFilter-R-xLyJ1-.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-C5ORXLqM.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
