import{j as r}from"./iframe-BxDpVhRd.js";import{a as h,u as x,F as f,t as S}from"./Form-CR4vr6SN.js";import{L as i}from"./Label-CMeeurCB.js";import{B as m}from"./Button-COfabfFq.js";import{S as T}from"./Section-DXdLzCuH.js";import{A as g}from"./ActionGroup-DNCuAw2y.js";import{s as j}from"./Action-CQ_Tet5k.js";import{M as y}from"./DateField-DgkNJVeQ.js";import{T as s}from"./TimeField-Fu9t91v5.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bmq-pcAK.js";import"./IconWarning-CR1PBxFk.js";import"./FieldError-BrR5GiZM.js";import"./utils-CpjREF5t.js";import"./Text-Bq0GBBEx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./context-CSPhd592.js";import"./browser-DkE4SP-u.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./Text-HfVZjSfr.js";import"./EmulatedBoldText-Di64OaFb.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJ12dAAc.js";import"./ProgressBar-CjBgSU-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cfg_1SLq.js";import"./useFocus-DCdhMrgy.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./ContextMenuSection-D81CeDCG.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./RSPContexts-CaPgNpVT.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useControlledState-B0hr1ZXY.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./Switch-TSGUx7eD.js";import"./useMakeFocusable-DOqtKzac.js";import"./useToggleState-GJ2JDvNb.js";import"./useFormReset-BdOLdhs-.js";import"./getActionGroupSlot-DfO33wTs.js";import"./Form-DnVdWn9l.js";import"./Group-BMNJ9slh.js";import"./Input-CLCKEIJY.js";import"./useFormValidation-BO_UVXRs.js";import"./useSpinButton-DwlNA7wt.js";import"./useFilter-CA4hB-zz.js";import"./FormField.module-CqWyJNQI.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
