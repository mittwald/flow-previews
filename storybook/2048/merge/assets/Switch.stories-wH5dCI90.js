import{j as r}from"./iframe-BdvCKsbF.js";import{a as u,u as l,F as d,t as j}from"./Form-C_oFPc-t.js";import{L as h}from"./Label-669hhtQM.js";import{B as m}from"./Button-CEcdxUV1.js";import{S as g}from"./Section-Jzko1FZT.js";import{A as y}from"./ActionGroup-8hqY-sJD.js";import{s as f}from"./Action-CY3HJwZy.js";import{S as x}from"./Switch-8-U5PjWP.js";import"./index-Cun1SEai.js";import"./dynamic-a4vM_yKz.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./clsx-B-dksMZM.js";import"./index-nNeao2-W.js";import"./FieldError-CdPfgsKF.js";import"./IconWarning-P52nLd_s.js";import"./FieldError-CxS3H1fm.js";import"./utils-BbupUKpI.js";import"./Text-C3C-Y4LW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./context-DElBd4UT.js";import"./browser-1fV_VPE3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./Text-JqEaJ00k.js";import"./EmulatedBoldText-Bq1I9eFa.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSXZ_FtS.js";import"./useFocus-BlE0zHW0.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./ContextMenuSection-BnE57rKt.js";import"./Dialog-CKgg94zq.js";import"./RSPContexts-Bh8BGw74.js";import"./OverlayArrow-Ck2ASDGt.js";import"./useControlledState-DFl6XB3S.js";import"./Collection-BLnLf1sz.js";import"./CollectionBuilder-C6WQfqbB.js";import"./context-BhDiC0Wn.js";import"./Separator-CZgxguF8.js";import"./SelectionManager-qFHbh8Rk.js";import"./useEvent-DnBkuKjZ.js";import"./useCollator-EaQty6uw.js";import"./FocusScope-pfm_0aY5.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./useStatic-PYikJUKS.js";import"./context-CCm7d4ti.js";import"./useMakeFocusable-BRRRy5hj.js";import"./useToggleState-Dwl8BZhq.js";import"./useFormReset-DGsTBoXq.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:u,render:()=>{const o=async b=>{await f(5e3),E(b)},F=l({defaultValues:{isEnabled:!1}}),S=j();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(S,{name:"isEnabled",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(u,{name:"email",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const Lr=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Lr as __namedExportsOrder,Ar as default};
