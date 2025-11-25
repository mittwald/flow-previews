import{j as r}from"./iframe-HHJxrKwA.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-wsvw38Iz.js";import{L as m}from"./Link-DCbgeGNX.js";import{ab as s,ac as h,M as j,g as f,h as p}from"./Modal-T9ideOdw.js";import{B as o}from"./Button-CMFIu-2V.js";import{T as c}from"./Text-DpCjRkNG.js";import{I as M}from"./Image-BVGsM23c.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-BL-u7Rdm.js";import{e as b}from"./FileCardList-D5TI9EMK.js";import"./Section-Byk_fwnD.js";import{H as k}from"./Heading-DYmofqbD.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-xvY9fOVo.js";import"./index-kZYQ5p_C.js";import"./index-DaaiETUi.js";import"./useLocalizedStringFormatter-DYYCi_Wo.js";import"./context-BPRr7l02.js";import"./utils-CqW00CMD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Cv3jUmeb.js";import"./useFocusable-BvYt2clO.js";import"./dynamic-C72LaG0o.js";import"./context-BVuVVWhQ.js";import"./Button-CpujMQDr.js";import"./ProgressBar-BFgUsHfp.js";import"./Hidden-BU2s8wDC.js";import"./RSPContexts-CI2I3CcO.js";import"./Collection-AoD9PaOI.js";import"./CollectionBuilder-BljvGYLf.js";import"./SelectionIndicator-CSgFHR1s.js";import"./Separator-Dggcol34.js";import"./browser-B_OFrHH8.js";import"./useStatic-DrdWJfEu.js";import"./LoadingSpinner-CeGC15LV.js";import"./Flex-C7vv3uag.js";import"./Accordion-BZ3ouy-_.js";import"./ActionGroup-BwzLbpYf.js";import"./Alert-CwwRXMkc.js";import"./AlertIcon-BGK-JIKH.js";import"./AlertBadge-D0eRjTre.js";import"./Align-B2oqC2QR.js";import"./AvatarStack-B6bz7kAB.js";import"./BigNumber-C7pZ7_lj.js";import"./Breadcrumb-DXXDE0Ik.js";import"./Legend-B9dFpFZY.js";import"./Color-gAx7Pts-.js";import"./TableFooterRow-CEbqxy8h.js";import"./SkeletonText-PAxx1wq8.js";import"./Content-Dgn2c9yW.js";import"./Label-Cd3K2WO5.js";import"./CounterBadge-C_LNAor4.js";import"./DonutChart-CF4XtXhZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BA7YQChN.js";import"./Header-CYWloTaj.js";import"./Initials-BTKA_iJE.js";import"./InlineCode-37DSuu8y.js";import"./LayoutCard-DsQ2Pyni.js";import"./Separator-CMOVKCX6.js";import"./MessageSeparator-DnifOB9g.js";import"./NavigationGroup-CktbrD9Y.js";import"./Notification-Bu7C660S.js";import"./NotificationProvider-BH1LT37R.js";import"./ControlledNotification-KlNAuKxq.js";import"./ProgressBar-DiXmMAYK.js";import"./Rating-B5eof2ex.js";import"./Skeleton-CPNzswlC.js";import"./EmulatedBoldText-voWdu8Zi.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
