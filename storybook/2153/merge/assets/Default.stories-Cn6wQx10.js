import{r as h,j as r}from"./iframe-CN4WTwYv.js";import{ao as m,d as g}from"./Modal-JtS1GCqs.js";import{L as u}from"./Label-BRmwvfXT.js";import{B as C}from"./Button-DKV_rJZ0.js";import{x as w}from"./IconWarning-OOGKEFPc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-B0RnxgZh.js";import"./flowComponent-DKJqWTmA.js";import"./index-BzOdNhte.js";import"./index-NeY_xEz-.js";import"./context-D5Q2rEdS.js";import"./Button-ABhPpFMV.js";import"./utils-dijpHYHY.js";import"./ProgressBar-BPzw3REr.js";import"./Hidden-BZs9FL3y.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-WZFoFUL5.js";import"./useFocusRing-BwoDdEBQ.js";import"./useFocusable-CuBMSLKI.js";import"./RSPContexts-qFT5nqOw.js";import"./Collection-_B8J5S67.js";import"./CollectionBuilder-BScyvG_s.js";import"./SelectionIndicator-BD_RUCQf.js";import"./Separator-HWaNsUvC.js";import"./browser-CybO_GX9.js";import"./useLocalizedStringFormatter-CTHVjSGk.js";import"./useStatic-B_XtSJ-Q.js";import"./FileCardList-B7y733ft.js";import"./Avatar-DUVggXrd.js";import"./AlertIcon-CK_ZHrhI.js";import"./Image-sLmDF6h6.js";import"./Text-CuaHEgKJ.js";import"./EmulatedBoldText-D_eW2liq.js";import"./Link-BWI3Ij3P.js";import"./ControlledNotification-B4SeTnx9.js";import"./LoadingSpinner-pxkgsSpr.js";import"./Flex-CdYYO_HZ.js";import"./Accordion-DTfzyVKJ.js";import"./Section-ChtzXzqR.js";import"./ActionGroup-DyQk2EE1.js";import"./Alert-D1kyjDat.js";import"./AlertBadge-vMsaaONk.js";import"./Align-CuYESgtx.js";import"./AvatarStack-DqNBCzbY.js";import"./BigNumber-Cmue7ZKp.js";import"./Breadcrumb-DD6fnOqx.js";import"./Heading-BxJhHPjy.js";import"./Legend-CvwACQxn.js";import"./Color-UdZqV4-Q.js";import"./TableFooterRow-CtEJIn2Q.js";import"./SkeletonText-CEwNi-L-.js";import"./Content-Bb2nt3RH.js";import"./CounterBadge-DqyLtEIg.js";import"./DonutChart-BRPZRgK_.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-e6fNnZwM.js";import"./Header-BVqKPdhQ.js";import"./Initials-C__jbqKP.js";import"./InlineCode-BLOKlvTP.js";import"./LayoutCard-BjkzdleE.js";import"./Separator-altoXYC_.js";import"./MessageSeparator-DzKM339D.js";import"./NavigationGroup-Ry0FrTf6.js";import"./Notification-CJdFBvUm.js";import"./NotificationProvider-CD_MO59g.js";import"./ProgressBar-ktu-Gi_7.js";import"./Rating-c-hlPqMh.js";import"./Skeleton-D5vx8POd.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},a={args:{placeholder:"helloMoto"}},i={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(C,{children:r.jsx(w,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Er=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,i as WithCustomButtons,a as WithPlaceholder,Er as __namedExportsOrder,yr as default};
