import{j as r}from"./iframe-6jyXgxue.js";import{t as d,$ as l,Y as g,x as u,a0 as x}from"./IconWarning-C-gwxPU9.js";import{L as m}from"./Link-D0jiVju_.js";import{a8 as s,a9 as h,M as j,e as f,f as p}from"./TimeField-BWhC3HpL.js";import{B as o}from"./Button-C79y5FLr.js";import{T as c}from"./Text-Dlqenc2H.js";import{I as M}from"./Image-COP6xYUW.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-C1mA-DAE.js";import{c as k}from"./FileCardList-B0iLEsKd.js";import"./Section-H3gIqLfl.js";import{H as S}from"./Heading-CJE26UUg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BY7KHLjg.js";import"./mergeRefs-DLi8bP-A.js";import"./index--zh6xbBg.js";import"./remote-D3kJiMg-.js";import"./useLocalizedStringFormatter-BA1DAplF.js";import"./context-JQMt_ZQS.js";import"./utils-gjysgmBz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BAh6-13b.js";import"./useFocusable-CajPj44S.js";import"./Accordion-fULoH9xe.js";import"./dynamic-DCXw5NHQ.js";import"./ActionGroup-CzskHu9f.js";import"./Alert-DrBylAny.js";import"./AlertIcon-CE8OjIho.js";import"./AlertBadge-DgAWcThQ.js";import"./Align-BzUcMv_f.js";import"./Popover-D8d0zPXi.js";import"./context-DHByHAd4.js";import"./Button-DvSQe7YO.js";import"./ProgressBar-BwsfQ2n1.js";import"./Hidden-DJLEoSnR.js";import"./RSPContexts-B8t3YJD-.js";import"./Collection-D3_W2fei.js";import"./CollectionBuilder-CkuRVJqW.js";import"./SelectionIndicator-B4LTYmXz.js";import"./Separator-DRruZlSn.js";import"./browser-BMGdvove.js";import"./useStatic-D2icMmWp.js";import"./OverlayTrigger-C4RVAI_V.js";import"./TableFooterRow-DpjTUBn1.js";import"./SkeletonText-6_21vf5Q.js";import"./AvatarStack-BqyIa6ad.js";import"./Badge-WZr49ZKv.js";import"./BigNumber-C54ZRNi7.js";import"./Breadcrumb-Cwl4tYyc.js";import"./Legend-WIvdEy4p.js";import"./Color-JgwV0I9-.js";import"./Content-BVhQmARn.js";import"./Label-ChCKJV3V.js";import"./ContextualHelpTrigger-CJ7SzJu0.js";import"./CounterBadge-D4Tjgl8K.js";import"./DonutChart-6sh_E6SJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CRpXUc1l.js";import"./Header-BSNdFr4b.js";import"./Initials-prUY4cPn.js";import"./InlineCode-Czh4dmVv.js";import"./PopoverTrigger-Dz8Taoga.js";import"./LoadingSpinner-D7O-q36Z.js";import"./Separator-BU3gQHFS.js";import"./Message-f3EcTgP_.js";import"./MessageSeparator-D_xNlPF-.js";import"./NavigationGroup-C98vmueH.js";import"./Notification-DPFB18oq.js";import"./NotificationProvider-Ce0Lip3J.js";import"./ProgressBar-uMhxME4A.js";import"./Rating-DbrK3hf3.js";import"./Skeleton-Dm-B8LNv.js";import"./EmulatedBoldText-BIdH-rcf.js";const wr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(S,{children:"Notifications"})})]}),r.jsxs(k,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const zr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,zr as __namedExportsOrder,wr as default};
