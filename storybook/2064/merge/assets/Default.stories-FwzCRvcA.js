import{j as r}from"./iframe-CwjVVvSu.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-B6H6J5Pk.js";import{L as m}from"./Link-00PuI0Ny.js";import{H as s}from"./HeaderNavigation-DwLfDx7w.js";import{B as o}from"./Button-BzxBG2HJ.js";import{T as p}from"./Text-BOmlTVxc.js";import{I as B}from"./Image-tJyVzwG1.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CHpsmcJm.js";import{C as y,M as c}from"./MenuItem-g8bC8H03.js";import{C as A}from"./ContextMenuTrigger-BHfhD2yf.js";import"./ContextMenuSection-BSZPjhOz.js";import{a as D,M as E}from"./Modal-ATRxUY7p.js";import{H as G}from"./Heading-Z1c9rlfR.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./index-Bxp7_DVb.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./context-YbH8ssAd.js";import"./utils-OpG5u5ZF.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CTJZYj-E.js";import"./useFocus-YxLRULIL.js";import"./useFocusRing-DVoBnH5y.js";import"./useFocusable-CooOyqEQ.js";import"./dynamic-BP9Yj9yh.js";import"./LoadingSpinner-BwQDbOwS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClXMkmVB.js";import"./ProgressBar-QC1O3iDd.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-DnOs_TEg.js";import"./EmulatedBoldText-pbz3Nf-x.js";import"./Text-lT5rhDYZ.js";import"./AlertIcon-Cf0LkGsZ.js";import"./Action-CQ8EezpL.js";import"./context-C4fo6dak.js";import"./useStatic-DG0mSv16.js";import"./getActionGroupSlot-D-7WMSXI.js";import"./Popover-GBjR9IEI.js";import"./useOverlayController-KraOxkmW.js";import"./OverlayContextProvider-EJWOl_vr.js";import"./Dialog-D6Mx5C8w.js";import"./RSPContexts-C2pkpfxa.js";import"./OverlayArrow-n3jQFhGI.js";import"./useControlledState-3R78iQB5.js";import"./Collection-cKUjot9l.js";import"./CollectionBuilder-DmI3Nmaj.js";import"./context-Boi0W4no.js";import"./Separator-DgCYxSL8.js";import"./SelectionManager-BvVPZ4Sc.js";import"./useEvent-tgNtvJjt.js";import"./useCollator-3AvnbkJz.js";import"./FocusScope-3UfsOkyw.js";import"./VisuallyHidden-DYp4WZRH.js";import"./ClearPropsContextView-CpKm48Q9.js";import"./Switch-BzwZOjfL.js";import"./useMakeFocusable-CgSnmY1U.js";import"./useToggleState-D3BXnR6u.js";import"./useFormReset-BtU7PEqW.js";import"./OverlayTrigger-BpES57uV.js";import"./ControlledNotification-C2EFo0kV.js";import"./DialogTriggerView-CFk6lPET.js";import"./Overlay-lRo0Ac0X.js";import"./ButtonView-Cwki5m_c.js";import"./Heading-oClWNrqM.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
