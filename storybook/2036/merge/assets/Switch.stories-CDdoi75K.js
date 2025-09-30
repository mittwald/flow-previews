import{j as r}from"./iframe-BxDpVhRd.js";import{a as u,u as l,F as d,t as j}from"./Form-CR4vr6SN.js";import{L as h}from"./Label-CMeeurCB.js";import{B as m}from"./Button-COfabfFq.js";import{S as g}from"./Section-DXdLzCuH.js";import{A as y}from"./ActionGroup-DNCuAw2y.js";import{s as f}from"./Action-CQ_Tet5k.js";import{S as x}from"./Switch-TSGUx7eD.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bmq-pcAK.js";import"./IconWarning-CR1PBxFk.js";import"./FieldError-BrR5GiZM.js";import"./utils-CpjREF5t.js";import"./Text-Bq0GBBEx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./context-CSPhd592.js";import"./browser-DkE4SP-u.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./Text-HfVZjSfr.js";import"./EmulatedBoldText-Di64OaFb.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJ12dAAc.js";import"./ProgressBar-CjBgSU-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cfg_1SLq.js";import"./useFocus-DCdhMrgy.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./ContextMenuSection-D81CeDCG.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./RSPContexts-CaPgNpVT.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useControlledState-B0hr1ZXY.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./getActionGroupSlot-DfO33wTs.js";import"./useMakeFocusable-DOqtKzac.js";import"./useToggleState-GJ2JDvNb.js";import"./useFormReset-BdOLdhs-.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Lr={title:"Integrations/React Hook Form/Switch",component:u,render:()=>{const o=async b=>{await f(5e3),E(b)},F=l({defaultValues:{isEnabled:!1}}),S=j();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(S,{name:"isEnabled",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(u,{name:"email",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <Switch>
            <Label>Text</Label>
          </Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const Tr=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Tr as __namedExportsOrder,Lr as default};
