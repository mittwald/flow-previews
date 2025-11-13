import{j as r}from"./iframe-DBT7gULD.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-BUJnRJXc.js";import{L as m}from"./Link-hErBzw1I.js";import{aa as s,ab as h,M as j,g as f,h as p}from"./Modal-BDM5GHUs.js";import{B as o}from"./Button-CCcVMCFh.js";import{T as c}from"./Text-BcenBV84.js";import{I as M}from"./Image-DK0DVEvL.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-D4XiVYbq.js";import{e as b}from"./FileCardList-DKqY5nDG.js";import"./Section-D6BoVeKj.js";import{H as k}from"./Heading-CxhJw16G.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7by5vuA.js";import"./index-Cczfp9NA.js";import"./index-pYm4_kYT.js";import"./useLocalizedStringFormatter-qYqIvEHn.js";import"./context-DTlkSZ0Y.js";import"./utils-D0uB-Zwx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BJASUfOx.js";import"./useFocusable-m652rNBk.js";import"./dynamic-DeRu_afx.js";import"./context-D6D-GlPg.js";import"./Button-C-UpDsRO.js";import"./ProgressBar-DcCMsBu5.js";import"./Hidden-BMktz6gh.js";import"./RSPContexts-Dom4UWqx.js";import"./Collection-BjYIoe9r.js";import"./CollectionBuilder-DOBxcW2Y.js";import"./SelectionIndicator-BqFKF874.js";import"./Separator-CWTtrhm9.js";import"./browser-DvkhEBxs.js";import"./useStatic-CqxwceTm.js";import"./LoadingSpinner-UyNbbNkS.js";import"./LayoutCard-yF4LQl2s.js";import"./Accordion-DbrfaGK3.js";import"./ActionGroup-BaRaSr0H.js";import"./getActionGroupSlot-Bfgl2kFS.js";import"./Alert-BVpQpQXk.js";import"./AlertIcon-B2G5YJ_h.js";import"./AlertBadge-C-4v8xNv.js";import"./Align-DkyK3rk7.js";import"./AvatarStack-5oER6YSZ.js";import"./BigNumber-ByEBpfDg.js";import"./Breadcrumb-C9tjsQdJ.js";import"./Legend-BSuRheR8.js";import"./Color-CfsSCbKc.js";import"./TableFooterRow-B5ePBGv6.js";import"./SkeletonText-yAbLh4O6.js";import"./Content-BNSFZdxK.js";import"./Label-CB-Jrcob.js";import"./CounterBadge-C-EdT-Ua.js";import"./DonutChart-BfLW1k2r.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CCV8_Obm.js";import"./Header-DF0mjguX.js";import"./Initials-CLL_WJIt.js";import"./InlineCode-CHkCj2DF.js";import"./Separator-DSZggq8J.js";import"./MessageSeparator-DKc-7GUt.js";import"./NavigationGroup-CtWNzX63.js";import"./Notification-CgJLhaIj.js";import"./NotificationProvider-BBWQX6wG.js";import"./ControlledNotification-BggQqaRM.js";import"./ProgressBar-DwVQ0bzm.js";import"./Rating-DhxcEvbm.js";import"./Skeleton-HhO4ThtG.js";import"./EmulatedBoldText-Cn-N7_G4.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Rr as default};
