import{j as r}from"./iframe-Dyev7uqQ.js";import{a as u,u as l,F as d,t as j}from"./Form-Gu8_mx9R.js";import{L as h}from"./Label-DTUVPi2K.js";import{B as m}from"./Button-M1gfFqsi.js";import{S as g}from"./Section-BfDLZAnd.js";import{A as y}from"./ActionGroup-Cif2aV44.js";import{s as f}from"./Action-B4ax4ap7.js";import{S as x}from"./Switch-Cf5lbLNu.js";import"./index-Cun1SEai.js";import"./dynamic-BE-yoA5C.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./clsx-B-dksMZM.js";import"./index-CvZL7rFv.js";import"./FieldError-BvGSOrPS.js";import"./IconWarning-Bsmw3ttA.js";import"./FieldError-Nbp5sqjA.js";import"./utils-xAJ0Toj9.js";import"./Text-s2lACfdw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./context-z-HIZVd9.js";import"./browser-ChaPEiup.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./Text-DCNvFKD8.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ProgressBar-DcFpY2St.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DabLIItt.js";import"./useFocus-D9hOsqQc.js";import"./useFocusRing-Bh9Ki2YC.js";import"./useFocusable-uBBnOUX9.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./RSPContexts-CLj3WTCR.js";import"./OverlayArrow-BiwtfbnF.js";import"./useControlledState-Cwb3iJ3d.js";import"./Collection-BT_5iu3o.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./context-xoyjw4Qx.js";import"./Separator-Cv2eEaeb.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./useStatic-Bud3ojrW.js";import"./context-C27PnH24.js";import"./useMakeFocusable-C9hlV0WZ.js";import"./useToggleState-CN3ThxH0.js";import"./useFormReset-CiUCuSgO.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:u,render:()=>{const o=async b=>{await f(5e3),E(b)},F=l({defaultValues:{isEnabled:!1}}),S=j();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(S,{name:"isEnabled",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(u,{name:"email",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
